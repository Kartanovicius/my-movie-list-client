import { IBase } from 'types/base.interface';
import { ITvSeries } from 'types/tvseries.inteface';
import { IUser } from 'types/user.interface';

export interface ITvSeriesComment extends IBase {
	message: string;

	user: IUser;

	tvseries: ITvSeries;
}
