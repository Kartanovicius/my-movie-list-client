import cn from 'classnames';
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
}) => {
	return <h2 className={cn('title', className)}>{children}</h2>;
};

export const LargeCardDescription: FC<
	PropsWithChildren<ILargeCardDescription>
> = ({ children, className }) => {
	return <p className={cn('description', className)}>{children}</p>;
};

export const LargeCardAdditionalInfo: FC<
	PropsWithChildren<ILargeCardAdditionalInfo>
> = ({ children, className }) => {
	return <div className={cn('additional_info', className)}>{children}</div>;
};
export const LargeCardAdditionalInfoItem: FC<
	PropsWithChildren<ILargeCardAdditionalInfoItem>
> = ({ children, className }) => {
	return <p className={cn('additional_info_items', className)}>{children}</p>;
};

const LargeCard: FC<PropsWithChildren<ILargeCard>> = ({
	children,
	img,
	...rest
}) => {
	return (
		<div className={'large_card'} {...rest}>
			<img src={img.src} alt={img.alt} />
			<div className={'content'}>{children}</div>
		</div>
	);
};

export default LargeCard;
