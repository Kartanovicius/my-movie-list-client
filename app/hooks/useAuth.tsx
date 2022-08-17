import { IAuthData } from '../service/auth/auth.helper';

export const useAuth = (): IAuthData => ({
	user: null,
	accessToken: '',
});
