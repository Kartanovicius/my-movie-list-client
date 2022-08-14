import { axiosClassic } from 'api/axios';
import { ITvSeries } from 'types/tvseries.inteface';

const TVSERIES = 'tvseries';

export const TvSeriesService = {
	async getTvSeries() {
		const response = await axiosClassic.post<ITvSeries[]>(`${TVSERIES}`);
		return response.data;
	},

	async getMostViewedTvSeries() {
		const response = await axiosClassic.post<ITvSeries[]>(
			`${TVSERIES}/most-viewed`,
		);
		return response.data;
	},

	async getHighestRatedTvSeries() {
		const response = await axiosClassic.post<ITvSeries[]>(
			`${TVSERIES}/highest-rated`,
		);
		return response.data;
	},
};
