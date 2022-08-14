import { IBase } from 'types/base.interface';
import { IMovie } from 'types/movie.interface';
import { IUser } from 'types/user.interface';

export interface IMovieComment extends IBase {
	message: string;

	user: IUser;

	movie: IMovie;
}
