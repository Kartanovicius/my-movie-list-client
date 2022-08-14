import { IBase } from 'types/base.interface';

export interface IShow extends IBase {
	name: string;

	views?: number;

	rating?: number;

	duration?: number;

	description: string;

	posterPath: string;

	trailerPath: string;
}