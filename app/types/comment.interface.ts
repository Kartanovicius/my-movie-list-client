import { IBase } from 'types/base.interface';
import { IShow } from 'types/show.interface';
import { IUser } from 'types/user.interface';

export interface IComment extends IBase {
	message: string;

	user: IUser;

	show: IShow;
}

export interface ICommentDto {
	message: string;

	showId: number;
}
