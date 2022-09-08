import { HTMLAttributes } from 'react';

export interface IContentHorizontalRow extends HTMLAttributes<HTMLDivElement> {}

interface IContentHorizontalRowLinkProps {
	pathname?: string;
	query?: string;
}

interface IContentHorizontalRowItemProps {
	size?: number;
}

export type IContentHorizontalRowName = HTMLAttributes<HTMLHeadingElement> &
	IContentHorizontalRowLinkProps;

export interface IContentHorizontalRowItemContainer
	extends HTMLAttributes<HTMLUListElement> {}

export type IContentHorizontalRowItem = HTMLAttributes<HTMLLIElement> &
	IContentHorizontalRowLinkProps &
	IContentHorizontalRowItemProps;
