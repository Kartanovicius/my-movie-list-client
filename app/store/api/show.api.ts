import { IShow, IShowDto } from 'types/show.interface';

import { api } from '@store/api/api';

const SHOW = 'show';

export const showApi = api.injectEndpoints({
	endpoints: builder => ({
		getShows: builder.query<IShow[], void>({
			query: () => ({
				url: `/${SHOW}`,
			}),
		}),
		getShowById: builder.query<IShow, number>({
			query: id => `/${SHOW}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Show', id }],
		}),
		getMostViewedShow: builder.query<IShow[], void>({
			query: () => `/${SHOW}/most-viewed`,
			providesTags: () => [{ type: 'Show' }],
		}),
		getHighestRatedShow: builder.query<IShow[], void>({
			query: () => `/${SHOW}/highest-rated`,
			providesTags: () => [{ type: 'Show' }],
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
