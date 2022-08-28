import { API_URL } from '@api/axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUser } from 'types/user.interface';

import { TypeRootState } from '@store/store';

import { USER } from '@utils/constants';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Show', 'Profile', 'DatabaseFiles'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken;

			if (token) headers.set('Authorization', `Bearer ${token}`);

			return headers;
		},
	}),
	endpoints: builder => ({
		getProfiles: builder.query<IUser[], void>({
			query: () => `${USER}`,
			providesTags: () => [{ type: 'Profile' }],
		}),
		getProfile: builder.query<IUser, any>({
			query: () => `${USER}/profile`,
			providesTags: () => [{ type: 'Profile' }],
		}),
		getProfileById: builder.query<IUser, number>({
			query: id => `${USER}/by-id/${id}`,
			providesTags: () => [{ type: 'Profile' }],
		}),
	}),
});
