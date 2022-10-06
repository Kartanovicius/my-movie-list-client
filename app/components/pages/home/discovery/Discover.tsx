import { useRouter } from 'next/router';
import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { AiFillStar } from 'react-icons/ai';

import MovieLargeCard, {
	MovieLargeCardAdditionalInfo,
	MovieLargeCardAdditionalInfoItem,
	MovieLargeCardDescription,
	MovieLargeCardTitle,
} from '@components/ui/cards/movie-large-card/MovieLargeCard';

import { showApi } from '@store/api/show.api';

import { toTitleCase, toVideoDuration } from '@utils/textConverter';

import styles from './Discover.module.scss';

const Discover: FC = () => {
	const { query } = useRouter();
	const { data: lastAddedShow, isLoading: loadingLastAddedShow } =
		showApi.useGetLastAddedShowQuery(query.type);

	return (
		<div className={styles.discover}>
			{loadingLastAddedShow && (
				<ContentLoader
					backgroundOpacity={0.1}
					foregroundOpacity={0.15}
					style={{ width: '100%', height: '300px', aspectRatio: '16/9' }}
				>
					<rect
						x='0'
						y='0'
						rx='10'
						ry='10'
						style={{ width: '100%', height: '100%' }}
					/>
				</ContentLoader>
			)}
			{!loadingLastAddedShow && lastAddedShow && (
				<MovieLargeCard
					showId={lastAddedShow.id}
					img={{
						src: lastAddedShow.posterPath,
						alt: 'Movie image',
					}}
					className={'md:h-48'}
				>
					<MovieLargeCardTitle>{lastAddedShow.name}</MovieLargeCardTitle>
					<MovieLargeCardDescription>
						{lastAddedShow.description}
					</MovieLargeCardDescription>
					<MovieLargeCardAdditionalInfo>
						<MovieLargeCardAdditionalInfoItem>
							{toVideoDuration(lastAddedShow.duration)}
						</MovieLargeCardAdditionalInfoItem>
						<MovieLargeCardAdditionalInfoItem>
							{lastAddedShow.genre.map((genre, index) =>
								index == 0 ? toTitleCase(genre) : `, ${toTitleCase(genre)}`,
							)}
						</MovieLargeCardAdditionalInfoItem>
						<MovieLargeCardAdditionalInfoItem>
							<span className={'flex-center gap-1'}>
								{lastAddedShow.rating}
								<AiFillStar className={'text-orange-400'} />
							</span>
						</MovieLargeCardAdditionalInfoItem>
					</MovieLargeCardAdditionalInfo>
				</MovieLargeCard>
			)}
		</div>
	);
};

export default Discover;
