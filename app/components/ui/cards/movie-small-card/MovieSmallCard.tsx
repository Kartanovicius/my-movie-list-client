import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import {
	ISmallCard,
	ISmallCardAdditionalInfo,
	ISmallCardAdditionalInfoItem,
	ISmallCardTitle,
} from './movie-small-card.interface';

export const SmallCardTitle: FC<PropsWithChildren<ISmallCardTitle>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<h3 className={cn('small-card-content-title', className)} {...rest}>
			{children}
		</h3>
	);
};

export const SmallCardAdditionalInfo: FC<
	PropsWithChildren<ISmallCardAdditionalInfo>
> = ({ children, className, ...rest }) => {
	return (
		<div
			className={cn('small-card-content-additional-info', className)}
			{...rest}
		>
			{children}
		</div>
	);
};

export const SmallCardAdditionalInfoItem: FC<
	PropsWithChildren<ISmallCardAdditionalInfoItem>
> = ({ children, className, ...rest }) => {
	return (
		<p
			className={cn('small-card-content-additional-info-items', className)}
			{...rest}
		>
			{children}
		</p>
	);
};

const MovieSmallCard: FC<PropsWithChildren<ISmallCard>> = ({
	children,
	img,
	showId,
	className,
	...rest
}) => {
	return (
		<div className={cn('small-card', className)} {...rest}>
			<div className={'small-card-img-container'}>
				{img.src === '' ? (
					<div className={'small-card-img-container-missing-img'}>
						Image is missing 🥺
					</div>
				) : (
					<img src={img.src} alt={img.alt} />
				)}
			</div>
			<div className={'small-card-content'}>{children}</div>
		</div>
	);
};

export default MovieSmallCard;
