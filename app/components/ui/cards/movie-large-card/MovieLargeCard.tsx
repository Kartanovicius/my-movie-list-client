import cn from 'classnames';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import {
	IMovieLargeCard,
	IMovieLargeCardAdditionalInfo,
	IMovieLargeCardAdditionalInfoItem,
	IMovieLargeCardDescription,
	IMovieLargeCardTitle,
} from './movie-large-card.interface';

export const MovieLargeCardTitle: FC<
	PropsWithChildren<IMovieLargeCardTitle>
> = ({ children, className, ...rest }) => {
	return (
		<h2 className={cn('movie-large-card-content-title', className)} {...rest}>
			{children}
		</h2>
	);
};

export const MovieLargeCardDescription: FC<
	PropsWithChildren<IMovieLargeCardDescription>
> = ({ children, className, ...rest }) => {
	return (
		<p
			className={cn('movie-large-card-content-description', className)}
			{...rest}
		>
			{children}
		</p>
	);
};

export const MovieLargeCardAdditionalInfo: FC<
	PropsWithChildren<IMovieLargeCardAdditionalInfo>
> = ({ children, className, ...rest }) => {
	return (
		<div
			className={cn('movie-large-card-content-additional-info', className)}
			{...rest}
		>
			{children}
		</div>
	);
};
export const MovieLargeCardAdditionalInfoItem: FC<
	PropsWithChildren<IMovieLargeCardAdditionalInfoItem>
> = ({ children, className, ...rest }) => {
	return (
		<p
			className={cn(
				'movie-large-card-content-additional-info-items',
				className,
			)}
			{...rest}
		>
			{children}
		</p>
	);
};

const MovieLargeCard: FC<PropsWithChildren<IMovieLargeCard>> = ({
	children,
	img,
	showId,
	className,
	...rest
}) => {
	return (
		<Link
			href={{
				pathname: '/show',
				query: { id: showId },
			}}
		>
			<div className={cn('movie-large-card', className)} {...rest}>
				<img className={'movie-large-card-img'} src={img.src} alt={img.alt} />
				<div className={'movie-large-card-content'}>{children}</div>
			</div>
		</Link>
	);
};

export default MovieLargeCard;
