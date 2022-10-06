import { useRouter } from 'next/router';
import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { MovieLargeCardAdditionalInfoItem } from '@components/ui/cards/movie-large-card/MovieLargeCard';
import MovieSmallCard, {
	SmallCardAdditionalInfo,
	SmallCardAdditionalInfoItem,
	SmallCardTitle,
} from '@components/ui/cards/movie-small-card/MovieSmallCard';
import ContentHorizontalRow, {
	ContentHorizontalRowItem,
	ContentHorizontalRowItemContainer,
	ContentHorizontalRowName,
} from '@components/ui/content-row/content-horizontal-row/ContentHorizontalRow';

import { showApi } from '@store/api/show.api';

import styles from './Catalog.module.scss';

const Catalog: FC = () => {
	const { query } = useRouter();
	const { data: highestRatedShows } = showApi.useGetHighestRatedShowQuery(
		query.type,
	);
	const { data: mostViewedShows } = showApi.useGetMostViewedShowQuery(
		query.type,
	);
	if (!highestRatedShows || !mostViewedShows) return null;

	return (
		<div className={styles.catalog}>
			{/* highestRatedShows */}
			<ContentHorizontalRow className={'md:mb-8'}>
				<ContentHorizontalRowName>
					Highest Rated Movies & Shows
				</ContentHorizontalRowName>
				<ContentHorizontalRowItemContainer>
					{highestRatedShows.map(show => {
						return (
							<ContentHorizontalRowItem
								pathname={'show'}
								query={{ id: show.id.toString() }}
								key={show.id}
								className={'col-span-6 md:col-span-4 lg:col-span-2'}
							>
								<MovieSmallCard
									showId={show.id}
									img={{
										src: show.posterPath,
										alt: `Image of show ${show.name}`,
									}}
								>
									<SmallCardTitle>{show.name}</SmallCardTitle>
									<SmallCardAdditionalInfo>
										<SmallCardAdditionalInfoItem></SmallCardAdditionalInfoItem>
										<span className={'flex-center gap-1'}>
											<MovieLargeCardAdditionalInfoItem>
												{show.rating}
											</MovieLargeCardAdditionalInfoItem>
											<AiFillStar className={'text-orange-400 opacity-100'} />
										</span>
									</SmallCardAdditionalInfo>
								</MovieSmallCard>
							</ContentHorizontalRowItem>
						);
					})}
				</ContentHorizontalRowItemContainer>
			</ContentHorizontalRow>
			{/* mostViewedShows */}
			<ContentHorizontalRow>
				<ContentHorizontalRowName>
					Most Viewed Movies & Shows
				</ContentHorizontalRowName>
				<ContentHorizontalRowItemContainer>
					{mostViewedShows.map(show => {
						return (
							<ContentHorizontalRowItem
								pathname={'show'}
								query={{ id: show.id.toString() }}
								key={show.id}
								className={'col-span-6 md:col-span-4 lg:col-span-2'}
							>
								<MovieSmallCard
									showId={show.id}
									img={{
										src: show.posterPath,
										alt: `Image of show ${show.name}`,
									}}
								>
									<SmallCardTitle>{show.name}</SmallCardTitle>
									<SmallCardAdditionalInfo>
										<SmallCardAdditionalInfoItem></SmallCardAdditionalInfoItem>
										<span className={'flex-center gap-1'}>
											<MovieLargeCardAdditionalInfoItem>
												{show.views} views
											</MovieLargeCardAdditionalInfoItem>
										</span>
									</SmallCardAdditionalInfo>
								</MovieSmallCard>
							</ContentHorizontalRowItem>
						);
					})}
				</ContentHorizontalRowItemContainer>
			</ContentHorizontalRow>
		</div>
	);
};

export default Catalog;
