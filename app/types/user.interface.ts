import { IMovie } from 'types/movie.interface';
import { ITvSeries } from 'types/tvseries.inteface';

export interface IUser {
	email: string;

	name: string;

	watchedCount?: number;

	description: string;

	avatarPath: string;

	likedMovies: IMovie[];

	likedTvSeries: ITvSeries[];
}
