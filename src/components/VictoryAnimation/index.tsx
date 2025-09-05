import { useEffect, useState } from 'react';
import * as S from './styles';

interface VictoryAnimationProps {
	isVisible: boolean;
	onAnimationEnd?: () => void;
}

export const VictoryAnimation = ({ isVisible, onAnimationEnd }: VictoryAnimationProps) => {
	const [emojis, setEmojis] = useState<
		Array<{
			id: number;
			emoji: string;
			side: 'left' | 'right';
			delay: number;
			startPosition: number;
		}>
	>([]);

	const trophyEmojis = ['🏆', '🥇', '🎉', '⭐', '🎊', '👑', '🌟'];

	useEffect(() => {
		if (isVisible) {
			const newEmojis: Array<{
				id: number;
				emoji: string;
				side: 'left' | 'right';
				delay: number;
				startPosition: number;
			}> = [];

			for (let i = 0; i < 50; i++) {
				const sides: ('left' | 'right')[] = ['left', 'right'];
				const randomSide = sides[Math.floor(Math.random() * sides.length)];

				newEmojis.push({
					id: i,
					emoji: trophyEmojis[Math.floor(Math.random() * trophyEmojis.length)],
					side: randomSide,
					delay: Math.random() * 2000,
					startPosition: Math.random() * 80 + 10,
				});
			}

			setEmojis(newEmojis);

			const timeout = setTimeout(() => {
				setEmojis([]);
				onAnimationEnd?.();
			}, 4000);

			return () => clearTimeout(timeout);
		}
	}, [isVisible, onAnimationEnd]);

	if (!isVisible) return null;

	return (
		<S.Container>
			{emojis.map((item) => (
				<S.Emoji
					key={item.id}
					$side={item.side}
					$delay={item.delay}
					$startPosition={item.startPosition}
				>
					{item.emoji}
				</S.Emoji>
			))}
		</S.Container>
	);
};
