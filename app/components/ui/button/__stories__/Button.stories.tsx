import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Button, { ButtonIcon } from '../Button';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
		variant: {
			options: ['filled', 'outlined', 'text'],
			control: { type: 'radio' },
		},
		disabled: {
			control: { type: 'boolean' },
		},
		fullWidth: {
			control: { type: 'boolean' },
		},
		rounded: {
			options: ['regular', 'extra'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

const TemplateWithIcon: ComponentStory<typeof Button> = ({
	children,
	variant,
	className,
	fullWidth,
	rounded,
	size,
}) => (
	<Button
		className={className}
		size={size}
		rounded={rounded}
		fullWidth={fullWidth}
		variant={variant}
	>
		<ButtonIcon>🐑</ButtonIcon>
		{children}
	</Button>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Default Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled',
	disabled: true,
};

export const ButtonFullWidth = Template.bind({});
ButtonFullWidth.args = {
	children: 'Default Button',
	fullWidth: true,
};

export const ButtonAlignText = Template.bind({});
ButtonAlignText.args = {
	children: 'Align text with justify',
	className: 'justify-end',
	fullWidth: true,
};

export const ButtonWithIcon = TemplateWithIcon.bind({});
ButtonWithIcon.args = {
	children: 'Icon Button',
};

export const GenreButton = TemplateWithIcon.bind({});
GenreButton.args = {
	children: `Genre`,
	size: 'large',
	rounded: 'extra',
};
