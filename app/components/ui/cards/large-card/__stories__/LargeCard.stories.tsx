import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import LargeCard, {
	LargeCardAdditionalInfo,
	LargeCardAdditionalInfoItem,
	LargeCardDescription,
	LargeCardTitle,
} from '../LargeCard';

export default {
	title: 'Components/Cards/LargeCard',
	component: LargeCard,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof LargeCard>;

const Template: ComponentStory<typeof LargeCard> = args => (
	<LargeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<LargeCardTitle>The Legend of Vox Machina</LargeCardTitle>
			<LargeCardDescription>
				In a desperate attempt to pay off a mounting bar tab, a band of misfits
				end up on a quest to save the realm of Exandria from dark, magical
				forces.
			</LargeCardDescription>
			<LargeCardAdditionalInfo>
				<LargeCardAdditionalInfoItem>8.6 rating</LargeCardAdditionalInfoItem>
				<LargeCardAdditionalInfoItem>18min</LargeCardAdditionalInfoItem>
				<LargeCardAdditionalInfoItem>
					Fantasy, Adventure
				</LargeCardAdditionalInfoItem>
			</LargeCardAdditionalInfo>
		</>
	),
	img: {
		src: 'https://ik.imagekit.io/mymovielist/Legend-of-Vox-Machina.webp',
		alt: '',
	},
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	children: <LargeCardTitle>The Legend of Vox Machina</LargeCardTitle>,
	img: {
		src: 'https://ik.imagekit.io/mymovielist/Legend-of-Vox-Machina.webp',
		alt: '',
	},
};
