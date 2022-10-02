import cn from 'classnames';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

import {
	IContentHorizontalRow,
	IContentHorizontalRowItem,
	IContentHorizontalRowItemContainer,
	IContentHorizontalRowName,
} from './content-horizontal-row.interface';

export const ContentHorizontalRowName: FC<
	PropsWithChildren<IContentHorizontalRowName>
> = ({ children, pathname, query, className, ...rest }) => {
	return pathname ? (
		<Link
			href={{
				pathname: pathname,
				query: query,
			}}
		>
			<h2
				className={cn('content-horizontal-row-name clickable', className)}
				{...rest}
			>
				{children}
			</h2>
		</Link>
	) : (
		<h2 className={cn('content-horizontal-row-name', className)} {...rest}>
			{children}
		</h2>
	);
};

export const ContentHorizontalRowItemContainer: FC<
	PropsWithChildren<IContentHorizontalRowItemContainer>
> = ({ children, className, ...rest }) => {
	return (
		<ul
			className={cn('content-horizontal-row-item-container', className)}
			{...rest}
		>
			{children}
		</ul>
	);
};

export const ContentHorizontalRowItem: FC<
	PropsWithChildren<IContentHorizontalRowItem>
> = ({ className, pathname, query, children, ...rest }) => {
	return (
		<li className={cn('content-horizontal-row-item', className)} {...rest}>
			{pathname ? (
				<Link href={{ pathname: pathname, query: query }}>
					<a>{children}</a>
				</Link>
			) : (
				<>{children}</>
			)}
		</li>
	);
};

const ContentHorizontalRow: FC<PropsWithChildren<IContentHorizontalRow>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<section className={cn('content-horizontal-row', className)} {...rest}>
			{children}
		</section>
	);
};

export default ContentHorizontalRow;
