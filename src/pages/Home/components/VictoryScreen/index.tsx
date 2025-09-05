import { Link } from 'react-router-dom';
import type { Champion } from '../../../../@entites/Champion';
import * as S from './styles';

interface VictoryScreenProps {
	champion: Champion;
	attempts: number;
	isVisible: boolean;
}

export const VictoryScreen = ({ champion, attempts, isVisible }: VictoryScreenProps) => {
	if (!isVisible) return null;

	return (
		<S.Container id='victory-screen'>
			<h3>
				<span>🎉</span> VICTORY! 🎉
			</h3>

			<S.ChampionImage>
				<img src={champion.icon} alt={champion.name} />
			</S.ChampionImage>

			<h4>{champion.name}</h4>

			<S.Stats>
				<div>
					<span>Attempts:</span>
					<span>{attempts}</span>
				</div>

				<div>
					<span>Efficiency:</span>
					<span>{Math.round((1 / attempts) * 100)}%</span>
				</div>
			</S.Stats>

			<p>
				You found the champion in {attempts} attempt{attempts > 1 ? 's' : ''}!
			</p>

			<Link to={'/ability'}>
				<button type='button'>Try Ability Mode</button>
			</Link>
		</S.Container>
	);
};
