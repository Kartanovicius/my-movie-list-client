import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { IButton, IButtonIcon } from '@components/ui/button/button.interface';

export const ButtonIcon: FC<PropsWithChildren<IButtonIcon>> = ({
	children,
	className,
}) => {
	return <span className={cn('icon', className)}>{children}</span>;
};

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	rounded = 'regular',
	size = 'medium',
	fullWidth,
	...rest
}) => {
	return (
		<span>
			<button
				className={cn(
					'button',
					size,
					rounded,
					fullWidth && 'full_width',
					className,
				)}
				{...rest}
			>
				{children}
			</button>
		</span>
	);
};

export default Button;
