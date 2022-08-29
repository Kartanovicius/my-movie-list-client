import { IBase } from 'types/base.interface';

export interface IShow extends IBase {
	name: string;

	views?: number;

	rating?: number;

	duration?: number;

	description: string;

	genre: Array<GenreEnum>;

	posterPath: string;

	trailerPath: string;
}

export interface IShowDto {
	name: string;

	description: string;

	trailerPath: string;

	posterPath: string;
}

export enum GenreEnum {
	'comedy',
	'fantasy',
	'drama',
	'history',
	'horror',
	'adventure',
	'action',
	'noir',
	'thriller',
}
