import type { Champion } from '../../../../@entites/Champion';
import * as S from './styles';

const infos = ['Champion', 'Gender', 'Position(s)', 'Resource', 'Range', 'Year'];

interface ContentProps {
	drawnChampion: Champion;
	pickedChampions: Champion[];
}

type Status = 'success' | 'partial' | 'fail';

export const Content = ({ drawnChampion, pickedChampions }: ContentProps) => {
	const getColumnStatus = (field: keyof Champion, picked: Champion, drawn: Champion): Status => {
		if (field === 'positions') {
			if (!picked.positions || !drawn.positions) return 'fail';

			const allPickedInDrawn = picked.positions.every((pos) => drawn.positions?.includes(pos));

			if (allPickedInDrawn) {
				return picked.positions.length === drawn.positions.length ? 'success' : 'partial';
			}

			if (picked.positions.some((pos) => drawn.positions?.includes(pos))) {
				return 'partial';
			}

			return 'fail';
		}

		if (field === 'releaseDate') {
			const pickedYear = picked.releaseDate?.split('-')[0];
			const drawnYear = drawn.releaseDate?.split('-')[0];
			if (!pickedYear || !drawnYear) return 'fail';
			return pickedYear === drawnYear ? 'success' : 'fail';
		}

		return picked[field] === drawn[field] ? 'success' : 'fail';
	};

	const getYearDirection = (picked: Champion, drawn: Champion): string => {
		const pickedYear = picked.releaseDate?.split('-')[0];
		const drawnYear = drawn.releaseDate?.split('-')[0];

		if (!pickedYear || !drawnYear) return '';

		const pickedYearNum = parseInt(pickedYear);
		const drawnYearNum = parseInt(drawnYear);

		if (pickedYearNum > drawnYearNum) return 'lower';
		if (pickedYearNum < drawnYearNum) return 'higher';
		return 'correct';
	};

	return (
		<S.Container>
			{pickedChampions.length > 0 && (
				<S.Head>
					{infos.map((info) => (
						<div key={info}>
							<p>{info}</p>
						</div>
					))}
				</S.Head>
			)}

			{pickedChampions.map((champ) => {
				const { id, icon, name, gender, positions, resource, attackType, releaseDate } = champ;

				return (
					<S.Content key={id}>
						<div data-status={getColumnStatus('id', champ, drawnChampion)} className='icon'>
							<img src={icon} alt={name} />
						</div>

						<div data-status={getColumnStatus('gender', champ, drawnChampion)}>
							<p>{gender}</p>
						</div>

						<div data-status={getColumnStatus('positions', champ, drawnChampion)}>
							{positions?.map((position) => (
								<img key={position} src={`images/roles/${position}.svg`} alt={position} />
							))}
						</div>

						<div data-status={getColumnStatus('resource', champ, drawnChampion)}>
							<p>
								{resource === 'BLOOD_WELL' || resource === 'CRIMSON_RUSH' ? 'MANALESS' : resource}
							</p>
						</div>

						<div data-status={getColumnStatus('attackType', champ, drawnChampion)}>
							<p>{attackType}</p>
						</div>

						<div
							data-status={getColumnStatus('releaseDate', champ, drawnChampion)}
							data-year-direction={getYearDirection(champ, drawnChampion)}
						>
							<p>{releaseDate?.split('-')[0]}</p>
						</div>
					</S.Content>
				);
			})}
		</S.Container>
	);
};
