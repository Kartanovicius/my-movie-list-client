import { axiosClassic } from 'api/axios';

import { IAuthData } from './auth.helper';

const AUTH = 'auth';

export const AuthService = {
	async authorize(type: 'login' | 'register', email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(`${AUTH}/${type}`, {
			email,
			password,
		});
		return response.data;
	},
};
