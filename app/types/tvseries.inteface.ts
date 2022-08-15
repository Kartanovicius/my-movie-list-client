import { IComment } from 'types/comment.interface';
import { IShow } from 'types/show.interface';
import { IUser } from 'types/user.interface';

export interface ITvSeries extends IShow {
	users: IUser[];

	comments: IComment[];
}
