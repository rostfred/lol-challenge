import axios from 'axios';

const { VITE_CDRAGON_BASE_URL } = import.meta.env;

export const api = axios.create({
	baseURL: VITE_CDRAGON_BASE_URL,
});

api.interceptors.request.use(
	async (config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
