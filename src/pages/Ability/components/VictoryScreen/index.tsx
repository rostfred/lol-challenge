import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Champion } from '../../../../@entites/Champion';
import * as S from './styles';

interface VictoryScreenAbilityProps {
	champion: Champion;
	drawnAbility: {
		skill: string;
		name: string;
		icon: string;
	};
	attempts: number;
	isVisible: boolean;
}

export const VictoryScreen = ({
	champion,
	drawnAbility,
	attempts,
	isVisible,
}: VictoryScreenAbilityProps) => {
	const skills = ['P', 'Q', 'W', 'E', 'R'];
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

	if (!isVisible) return null;

	const handleSkillClick = (skill: string) => {
		if (selectedSkill) return;
		setSelectedSkill(skill);
	};

	const getSkillStatus = (skill: string) => {
		if (!selectedSkill) return 'default';
		if (skill === drawnAbility.skill) return 'success';
		if (skill === selectedSkill && skill !== drawnAbility.skill) return 'fail';
		return 'default';
	};

	const getFeedbackText = () => {
		if (!selectedSkill) return null;
		return selectedSkill === drawnAbility.skill ? 'GOOD JOB!' : 'ALMOST';
	};

	return (
		<S.Container id='victory-screen-ability'>
			<h3>ABILITY MASTER!</h3>

			<S.ChampionSection>
				<S.ChampionImage>
					<img src={champion.icon} alt={champion.name} />
				</S.ChampionImage>
				<div>
					<h4>Belongs to</h4>
					<h4>{champion.name}</h4>
				</div>
			</S.ChampionSection>

			<p>
				You identified the ability in {attempts} attempt{attempts > 1 ? 's' : ''}!
			</p>

			<S.AbilitySection>
				<h4>{drawnAbility.name}</h4>
				<S.AbilityImage>
					<img src={drawnAbility.icon} alt={drawnAbility.name} />
				</S.AbilityImage>
				<p>Which spell is it?</p>

				<S.SkillButtons>
					{skills.map((skill) => (
						<S.SkillButton
							key={skill}
							data-status={getSkillStatus(skill)}
							onClick={() => handleSkillClick(skill)}
						>
							{skill}
						</S.SkillButton>
					))}
				</S.SkillButtons>

				{getFeedbackText() && (
					<S.FeedbackText $isCorrect={selectedSkill === drawnAbility.skill}>
						{getFeedbackText()}
					</S.FeedbackText>
				)}
			</S.AbilitySection>

			<Link to={'/'}>
				<button type='button'>Try Classic Mode</button>
			</Link>
		</S.Container>
	);
};
