import { IAuthData } from '../../service/auth/auth.helper';

export interface IAuthInitialState extends IAuthData {
	isLoading: boolean;
}
