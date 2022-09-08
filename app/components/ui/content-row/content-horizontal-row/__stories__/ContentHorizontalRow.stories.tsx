import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ContentHorizontalRow, {
	ContentHorizontalRowItem,
	ContentHorizontalRowItemContainer,
	ContentHorizontalRowName,
} from '../ContentHorizontalRow';

export default {
	title: 'Components/ContentRow/ContentHorizontalRow',
	component: ContentHorizontalRow,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof ContentHorizontalRow>;

const Template: ComponentStory<typeof ContentHorizontalRow> = args => (
	<ContentHorizontalRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<ContentHorizontalRow>
			<ContentHorizontalRowName pathname={'abc'}>
				Default Name
			</ContentHorizontalRowName>
			<ContentHorizontalRowItemContainer>
				<ContentHorizontalRowItem pathname={'ccc'} size={1}>
					<div className={'bg-red-50 text-black text-center'}>
						With Pathname and Size 1
					</div>
				</ContentHorizontalRowItem>
				<ContentHorizontalRowItem pathname={'ccc'} size={2}>
					<div className={'bg-red-100 text-black text-center'}>
						With Pathname and Size 2
					</div>
				</ContentHorizontalRowItem>
				<ContentHorizontalRowItem size={3}>
					<div className={'bg-red-200 text-black text-center'}>
						Without Pathname and Size 3
					</div>
				</ContentHorizontalRowItem>
			</ContentHorizontalRowItemContainer>
		</ContentHorizontalRow>
	),
};
