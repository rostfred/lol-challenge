import type { Champion } from '../@entites/Champion';
import { api } from '../api/cdragon';

export const getAllChampions = async (): Promise<Champion[]> => {
	const { data } = await api.get('/');

	return data;
};
