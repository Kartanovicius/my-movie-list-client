import { ButtonHTMLAttributes } from 'react';

interface IButtonProps {
	rounded?: 'regular' | 'extra';
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
}

type TypeButtonPropsField = ButtonHTMLAttributes<HTMLButtonElement> &
	IButtonProps;

export interface IButton extends TypeButtonPropsField {}

export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {}
