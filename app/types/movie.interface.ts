import { IMovieComment } from 'types/movie-comment.interface';
import { IShow } from 'types/show.interface';
import { IUser } from 'types/user.interface';

export interface IMovie extends IShow {
	users: IUser[];

	comments: IMovieComment[];
}
