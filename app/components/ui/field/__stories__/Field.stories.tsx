import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Field from '../Field';

export default {
	title: 'Components/Field',
	component: Field,
	argTypes: {
		label: {
			control: { type: 'text' },
		},
		placeholder: {
			control: { type: 'text' },
		},
		type: {
			control: { type: 'text' },
		},
		error: {
			control: { type: 'object' },
		},
	},
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = args => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Default Text Input Field',
};

export const Label = Template.bind({});
Label.args = {
	label: 'Label',
};

export const Error = Template.bind({});
Error.args = {
	error: { message: 'Error message!', type: 'required' },
};
