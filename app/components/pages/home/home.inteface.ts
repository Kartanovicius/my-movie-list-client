import { IMovie } from 'types/movie.interface';
import { IShow } from 'types/show.interface';
import { ITvSeries } from 'types/tvseries.inteface';

export interface IHome {
	RandomShow: IShow;
	MostPopularShow: IShow;
	HighestRatedMovie: IMovie[];
	HighestRatedTvSeries: ITvSeries[];
}
