export type Champion = {
	id?: number;
	name?: string;
	icon?: string;
	gender?: string;
	positions?: string[];
	resource?: string;
	attackType?: string;
	releaseDate?: string;
	abilities?: {
		skill: string;
		name: string;
		icon: string;
	}[];
};
