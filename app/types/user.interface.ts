import { IShow } from 'types/show.interface';

import { IBase } from './base.interface';

export interface IUser extends IBase {
	email: string;

	name: string;

	role: 'user' | 'admin';

	avatarId: number;

	likedShows: IShow[];
}
