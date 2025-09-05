import { useQuery } from '@tanstack/react-query';
import type { Champion } from '../@entites/Champion';
import { getAllChampions } from '../services/getAllChampions';

export const useChampionData = () => {
	return useQuery<Champion[]>({
		queryKey: ['champions'],
		queryFn: getAllChampions,
	});
};
