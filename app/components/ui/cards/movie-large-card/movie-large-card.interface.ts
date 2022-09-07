import { HTMLAttributes } from 'react';

interface ILargeCardProps {
	showId: number;
	img: { src: string; alt: string };
}

type TypeLargeCardPropsField = HTMLAttributes<HTMLDivElement> & ILargeCardProps;

export interface IMovieLargeCard extends TypeLargeCardPropsField {}

export interface IMovieLargeCardTitle
	extends HTMLAttributes<HTMLHeadingElement> {}

export interface IMovieLargeCardDescription
	extends HTMLAttributes<HTMLParagraphElement> {}

export interface IMovieLargeCardAdditionalInfo
	extends HTMLAttributes<HTMLDivElement> {}

export interface IMovieLargeCardAdditionalInfoItem
	extends HTMLAttributes<HTMLParagraphElement> {}
