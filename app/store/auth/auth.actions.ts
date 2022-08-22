import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthFields } from '@components/pages/auth/auth-form/auth-form.interface';

import { toastError } from '@utils/toastr-api.utils';

import { IAuthData } from '../../service/auth/auth.helper';
import { AuthService } from '../../service/auth/auth.service';

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.authorize('register', email, password);
			toastr.success(
				'Registration Successful',
				'Welcome aboard! Account was successfully created.',
			);
			return response;
		} catch (e) {
			toastError(e);
			return thunkAPI.rejectWithValue(e);
		}
	},
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.authorize('login', email, password);
			toastr.success('Login Successful', 'Successfully logged in');
			return response;
		} catch (e) {
			toastError(e);
			return thunkAPI.rejectWithValue(e);
		}
	},
);

export const logout = createAsyncThunk('auth/logout', async () => {
	return {};
});
