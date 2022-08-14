import { axiosClassic } from 'api/axios';
import { IUser } from 'types/user.interface';

const USER = 'user';

export const UserService = {
	async getUsers() {
		const response = await axiosClassic.post<IUser[]>(`${USER}`);
		return response.data;
	},

	async getUser(id: number) {
		const response = await axiosClassic.post<IUser>(`${USER}/by-id/${id}`);
		return response.data;
	},
};
