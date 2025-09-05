import * as S from './styles';

interface HeroProps {
	drawnAbility: {
		skill: string;
		name: string;
		icon: string;
	};
}

export const Hero = ({ drawnAbility }: HeroProps) => {
	return (
		<S.Container>
			<h2>⚡ Ability Mode</h2>
			<p>Which champion has this ability?</p>
			<S.AbilityImage>
				<img src={drawnAbility.icon} alt={drawnAbility.name} />
			</S.AbilityImage>
		</S.Container>
	);
};
