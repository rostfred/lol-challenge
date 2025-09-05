import type { Champion } from '../../../../@entites/Champion';
import * as S from './styles';

interface ContentProps {
	drawnChampion: Champion;
	pickedChampions: Champion[];
}

type Status = 'success' | 'fail';

export const Content = ({ drawnChampion, pickedChampions }: ContentProps) => {
	const getStatus = (picked: Champion, drawn: Champion): Status => {
		if (picked === drawn) {
			return 'success';
		}
		return 'fail';
	};

	return (
		<S.Container>
			{pickedChampions.map((champ) => {
				const { id, icon, name } = champ;

				return (
					<S.Content data-status={getStatus(champ, drawnChampion)} key={id}>
						<div>
							<img src={icon} alt={name} />
						</div>
						<p>{name}</p>
					</S.Content>
				);
			})}
		</S.Container>
	);
};
