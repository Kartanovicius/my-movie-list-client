import { axiosClassic } from 'api/axios';
import { IMovie } from 'types/movie.interface';

const MOVIE = 'movie';

export const MovieService = {
	async getMovies() {
		const response = await axiosClassic.post<IMovie[]>(`${MOVIE}`);
		return response.data;
	},

	async getMostViewedMovie() {
		const response = await axiosClassic.post<IMovie[]>(`${MOVIE}/most-viewed`);
		return response.data;
	},

	async getHighestRatedMovies() {
		const response = await axiosClassic.post<IMovie[]>(
			`${MOVIE}/highest-rated`,
		);
		return response.data;
	},
};
