import { IShow } from 'types/show.interface';
import { ITvSeriesComment } from 'types/tvseries-comment.interface';
import { IUser } from 'types/user.interface';

export interface ITvSeries extends IShow {
	users: IUser[];

	comments: ITvSeriesComment[];
}
