import { useEffect, useState } from 'react';
import type { Champion } from '../../@entites/Champion';
import { Input } from '../../components/Input';
import { VictoryAnimation } from '../../components/VictoryAnimation';
import { useChampionData } from '../../hooks/useChampionData';
import { Content } from './components/Content';
import { Hero } from './components/Hero';
import { VictoryScreen } from './components/VictoryScreen';
import * as S from './styles';

export const Ability = () => {
	const [drawnChampion, setDrawnChampion] = useState<Champion | undefined>(undefined);
	const [drawnAbility, setDrawnAbility] = useState<
		{ skill: string; name: string; icon: string } | undefined
	>(undefined);
	const [pickedChampions, setPickedChampions] = useState<Champion[]>([]);
	const [showVictory, setShowVictory] = useState(false);
	const [gameWon, setGameWon] = useState(false);

	const handleChampionSelect = (champion: Champion) => {
		if (!pickedChampions.find((c) => c.id === champion.id)) {
			setPickedChampions((prev) => [champion, ...prev]);

			if (drawnChampion && champion.id === drawnChampion.id) {
				setShowVictory(true);
				setGameWon(true);

				setTimeout(() => {
					const victoryElement = document.getElementById('victory-screen-ability');
					if (victoryElement) {
						victoryElement.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
						});
					}
				}, 2000);
			}
		}
	};

	const { data, isLoading } = useChampionData();

	useEffect(() => {
		if (data && data.length > 0 && !drawnChampion) {
			const randomIndex = Math.floor(Math.random() * data.length);
			const selectedChampion = data[randomIndex];
			setDrawnChampion(selectedChampion);

			if (selectedChampion.abilities && selectedChampion.abilities.length > 0) {
				const randomAbilityIndex = Math.floor(Math.random() * selectedChampion.abilities.length);
				setDrawnAbility(selectedChampion.abilities[randomAbilityIndex]);
			}
		}
	}, [data, drawnChampion]);

	const handleVictoryEnd = () => {
		setShowVictory(false);
	};

	return (
		<S.Container>
			{drawnAbility && <Hero drawnAbility={drawnAbility} />}
			<Input
				champions={
					data
						? data.filter(
								(champion) => !pickedChampions.find((picked) => picked.id === champion.id),
							)
						: []
				}
				onChampionSelect={handleChampionSelect}
				maxResults={3}
				disabled={gameWon}
			/>
			{data && !isLoading && drawnChampion && (
				<Content drawnChampion={drawnChampion} pickedChampions={pickedChampions} />
			)}
			{gameWon && drawnChampion && drawnAbility && (
				<VictoryScreen
					champion={drawnChampion}
					drawnAbility={drawnAbility}
					attempts={pickedChampions.length}
					isVisible={gameWon}
				/>
			)}
			<VictoryAnimation isVisible={showVictory} onAnimationEnd={handleVictoryEnd} />
		</S.Container>
	);
};
