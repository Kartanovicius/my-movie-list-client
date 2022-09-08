import { HTMLAttributes } from 'react';

interface ISmallCardProps {
	showId: number;
	img: { src: string; alt?: string };
}

type TypeSmallCardPropsField = HTMLAttributes<HTMLDivElement> & ISmallCardProps;

export interface ISmallCard extends TypeSmallCardPropsField {}

export interface ISmallCardTitle extends HTMLAttributes<HTMLHeadingElement> {}

export interface ISmallCardAdditionalInfo
	extends HTMLAttributes<HTMLParagraphElement> {}

export interface ISmallCardAdditionalInfoItem
	extends HTMLAttributes<HTMLParagraphElement> {}
