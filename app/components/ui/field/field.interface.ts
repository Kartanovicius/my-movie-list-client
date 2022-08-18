import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface IFieldProps {
	label?: string;
	error?: FieldError;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
