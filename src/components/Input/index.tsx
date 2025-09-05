import Fuse from 'fuse.js';
import {
	AutoComplete,
	type AutoCompleteChangeEvent,
	type AutoCompleteCompleteEvent,
} from 'primereact/autocomplete';
import { useState } from 'react';
import * as S from './styles';

interface Champion {
	name?: string;
	icon?: string;
}

interface InputProps {
	champions: Champion[];
	onChampionSelect?: (champion: Champion) => void;
	maxResults?: number;
	disabled?: boolean;
}

export const Input = ({
	champions,
	onChampionSelect,
	maxResults = 5,
	disabled = false,
}: InputProps) => {
	const [value, setValue] = useState<Champion | undefined>(undefined);
	const [suggestions, setSuggestions] = useState<Champion[]>([]);
	const [hidePanel, setHidePanel] = useState(false);

	const fuse = new Fuse<Champion>(champions, { keys: ['name'], threshold: 0.3 });

	const search = (event: AutoCompleteCompleteEvent) => {
		if (disabled) return;
		const results = fuse
			.search(event.query || '')
			.map((r) => r.item)
			.slice(0, maxResults);
		setSuggestions(results);
		setHidePanel(false);
	};

	const onValueChange = (event: AutoCompleteChangeEvent<Champion>) => {
		if (disabled) return;
		setValue(event.value);

		if (event.value && typeof event.value === 'object' && event.value.name && onChampionSelect) {
			onChampionSelect(event.value);
			setValue(undefined);
			setHidePanel(true);
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (disabled) return;
		if (event.key === 'Enter' && suggestions.length > 0 && onChampionSelect) {
			event.preventDefault();
			onChampionSelect(suggestions[0]);
			setValue(undefined);
			setHidePanel(true);
		}
	};

	const itemTemplate = (item: Champion) => (
		<S.StyledItemTemplate>
			<div>
				<img src={item.icon} alt={item.name} />
			</div>
			<span>{item.name}</span>
		</S.StyledItemTemplate>
	);

	return (
		<S.StyledAutoCompleteWrapper $disabled={disabled}>
			<AutoComplete
				value={value}
				suggestions={suggestions}
				completeMethod={search}
				field='name'
				onChange={onValueChange}
				onKeyDown={handleKeyDown}
				itemTemplate={itemTemplate}
				placeholder={disabled ? 'Game completed!' : 'Pick a champion...'}
				panelStyle={hidePanel ? { display: 'none' } : {}}
				appendTo='self'
				disabled={disabled}
			/>
		</S.StyledAutoCompleteWrapper>
	);
};
