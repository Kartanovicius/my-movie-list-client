import { HTMLAttributes } from 'react';

interface ILargeCardProps {
	img: { src: string; alt: string };
}

type TypeLargeCardPropsField = HTMLAttributes<HTMLDivElement> & ILargeCardProps;

export interface ILargeCard extends TypeLargeCardPropsField {}

export interface ILargeCardTitle extends HTMLAttributes<HTMLHeadingElement> {}

export interface ILargeCardDescription
	extends HTMLAttributes<HTMLParagraphElement> {}

export interface ILargeCardAdditionalInfo
	extends HTMLAttributes<HTMLDivElement> {}

export interface ILargeCardAdditionalInfoItem
	extends HTMLAttributes<HTMLParagraphElement> {}
