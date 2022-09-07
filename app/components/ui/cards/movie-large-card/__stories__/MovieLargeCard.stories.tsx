import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import MovieLargeCard, {
	MovieLargeCardAdditionalInfo,
	MovieLargeCardAdditionalInfoItem,
	MovieLargeCardDescription,
	MovieLargeCardTitle,
} from '../MovieLargeCard';

export default {
	title: 'Components/Cards/MovieLargeCard',
	component: MovieLargeCard,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof MovieLargeCard>;

const Template: ComponentStory<typeof MovieLargeCard> = args => (
	<MovieLargeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<MovieLargeCardTitle>The Legend of Vox Machina</MovieLargeCardTitle>
			<MovieLargeCardDescription>
				In a desperate attempt to pay off a mounting bar tab, a band of misfits
				end up on a quest to save the realm of Exandria from dark, magical
				forces.
			</MovieLargeCardDescription>
			<MovieLargeCardAdditionalInfo>
				<MovieLargeCardAdditionalInfoItem>
					8.6 rating
				</MovieLargeCardAdditionalInfoItem>
				<MovieLargeCardAdditionalInfoItem>
					18min
				</MovieLargeCardAdditionalInfoItem>
				<MovieLargeCardAdditionalInfoItem>
					Fantasy, Adventure
				</MovieLargeCardAdditionalInfoItem>
			</MovieLargeCardAdditionalInfo>
		</>
	),
	img: {
		src: 'https://www.denofgeek.com/wp-content/uploads/2020/07/The-Boys-Season-3.jpg?resize=768%2C432',
		alt: '',
	},
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	children: (
		<MovieLargeCardTitle>The Legend of Vox Machina</MovieLargeCardTitle>
	),
	img: {
		src: 'https://www.denofgeek.com/wp-content/uploads/2020/07/The-Boys-Season-3.jpg?resize=768%2C432',
		alt: '',
	},
};
