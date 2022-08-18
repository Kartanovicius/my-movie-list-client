import cn from 'classnames';
import { FC, forwardRef } from 'react';

import { IField } from './field.interface';

const Field: FC = forwardRef<HTMLInputElement, IField>(
	({ label, error, className, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={'input'} style={style}>
				{label && <label className={'label'}>{label}</label>}
				<input
					ref={ref}
					type={type}
					className={cn('input_field', error && 'error')}
					{...rest}
				/>
				{error && <p className={'error'}>{error.message}</p>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
