import { useEffect, useState } from 'react';
import type { Champion } from '../../@entites/Champion';
import { Input } from '../../components/Input';
import { VictoryAnimation } from '../../components/VictoryAnimation';
import { useChampionData } from '../../hooks/useChampionData';
import { Content } from './components/Content';
import { Hero } from './components/Hero';
import { VictoryScreen } from './components/VictoryScreen';
import * as S from './styles';

export const Home = () => {
	const [drawnChampion, setDrawnChampion] = useState<Champion | undefined>(undefined);
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
					const victoryElement = document.getElementById('victory-screen');
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
			setDrawnChampion(data[randomIndex]);
		}
	}, [data, drawnChampion]);

	const handleVictoryEnd = () => {
		setShowVictory(false);
	};

	return (
		<S.Container>
			<Hero />
			<Input
				champions={
					data
						? data.filter(
								(champion) => !pickedChampions.find((picked) => picked.id === champion.id),
							)
						: []
				}
				onChampionSelect={handleChampionSelect}
				maxResults={5}
				disabled={gameWon}
			/>
			{data && !isLoading && drawnChampion && (
				<Content drawnChampion={drawnChampion} pickedChampions={pickedChampions} />
			)}
			{gameWon && drawnChampion && (
				<VictoryScreen
					champion={drawnChampion}
					attempts={pickedChampions.length}
					isVisible={gameWon}
				/>
			)}
			<VictoryAnimation isVisible={showVictory} onAnimationEnd={handleVictoryEnd} />
		</S.Container>
	);
};
