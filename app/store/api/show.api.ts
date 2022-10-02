import { IShow, IShowDto } from 'types/show.interface';

import { api } from '@store/api/api';
import { IShowApi } from '@store/types/ShowApi.interface';

const queryString = require('query-string');

const SHOW = 'show';

export const showApi = api.injectEndpoints({
	endpoints: builder => ({
		getShows: builder.query<IShow[], void>({
			query: () => ({
				url: `/${SHOW}`,
			}),
		}),
		getShowById: builder.query<IShow, IShowApi>({
			query: ({ id, genre }) => ({
				url: `/${SHOW}/${id}`,
				params: { 'genre[]': genre },
			}),
			providesTags: (result, error, { id }) => [{ type: 'Show', id }],
		}),
		getMostViewedShow: builder.query<IShow[], string | string[] | undefined>({
			query: genre => `/${SHOW}/most-viewed
				?${queryString.stringify({ genre: genre }, { arrayFormat: 'bracket' })}`,
			providesTags: () => [{ type: 'Show' }],
		}),
		getHighestRatedShow: builder.query<IShow[], string | string[] | undefined>({
			query: genre => `/${SHOW}/highest-rated
				?${queryString.stringify({ genre: genre }, { arrayFormat: 'bracket' })}`,
			providesTags: () => [{ type: 'Show' }],
		}),
		getLastAddedShow: builder.query<IShow, string | string[] | undefined>({
			query: genre => ({
				url: `/${SHOW}
					?${queryString.stringify({ genre: genre }, { arrayFormat: 'bracket' })}`,
				params: { 'per-page': 1, page: 1, order: 'DESC' },
			}),
			providesTags: () => [{ type: 'Show' }],
			transformResponse: (response: IShow[]) => response[0],
		}),
		createShow: builder.mutation<IShow, void>({
			query: () => ({
				url: `/${SHOW}`,
				method: 'POST',
			}),
			invalidatesTags: () => [{ type: 'Show' }],
		}),
		updateShow: builder.mutation<IShow, { id: number; body: IShowDto }>({
			query: ({ id, body }) => ({
				url: `/${SHOW}/update/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Show', id: id }],
		}),
		updateShowViews: builder.mutation<IShow, number>({
			query: id => ({
				url: `/${SHOW}/update-views/${id}`,
				method: 'PUT',
			}),
			invalidatesTags: () => [{ type: 'Show' }],
		}),
		deleteShow: builder.mutation<IShow, number>({
			query: id => ({
				url: `/${SHOW}/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Show', id }],
		}),
	}),
});
