import cn from 'classnames';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import {
	ILargeCard,
	ILargeCardAdditionalInfo,
	ILargeCardAdditionalInfoItem,
	ILargeCardDescription,
	ILargeCardTitle,
} from './large-card.interface';

export const LargeCardTitle: FC<PropsWithChildren<ILargeCardTitle>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<h2 className={cn('title', className)} {...rest}>
			{children}
		</h2>
	);
};

export const LargeCardDescription: FC<
	PropsWithChildren<ILargeCardDescription>
> = ({ children, className, ...rest }) => {
	return (
		<p className={cn('description', className)} {...rest}>
			{children}
		</p>
	);
};

export const LargeCardAdditionalInfo: FC<
	PropsWithChildren<ILargeCardAdditionalInfo>
> = ({ children, className, ...rest }) => {
	return (
		<div className={cn('additional_info', className)} {...rest}>
			{children}
		</div>
	);
};
export const LargeCardAdditionalInfoItem: FC<
	PropsWithChildren<ILargeCardAdditionalInfoItem>
> = ({ children, className, ...rest }) => {
	return (
		<p className={cn('additional_info_items', className)} {...rest}>
			{children}
		</p>
	);
};

const LargeCard: FC<PropsWithChildren<ILargeCard>> = ({
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
			<div className={cn('large_card', className)} {...rest}>
				<img src={img.src} alt={img.alt} />
				<div className={'content'}>{children}</div>
			</div>
		</Link>
	);
};

export default LargeCard;
