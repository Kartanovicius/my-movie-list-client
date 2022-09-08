import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { AiFillStar } from 'react-icons/ai';

import MovieSmallCard, {
	SmallCardAdditionalInfo,
	SmallCardAdditionalInfoItem,
	SmallCardTitle,
} from '../MovieSmallCard';

export default {
	title: 'Components/Cards/MovieSmallCard',
	component: MovieSmallCard,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof MovieSmallCard>;

const Template: ComponentStory<typeof MovieSmallCard> = args => (
	<MovieSmallCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<SmallCardTitle>The Boys</SmallCardTitle>
			<SmallCardAdditionalInfo>
				<SmallCardAdditionalInfoItem>2022</SmallCardAdditionalInfoItem>
				<span className={'flex-center gap-1'}>
					<SmallCardAdditionalInfoItem>8.6</SmallCardAdditionalInfoItem>
					<AiFillStar className={'text-orange-400 opacity-100'} />
				</span>
			</SmallCardAdditionalInfo>
		</>
	),
	img: {
		src: 'https://www.denofgeek.com/wp-content/uploads/2020/07/The-Boys-Season-3.jpg?resize=768%2C432',
		alt: '',
	},
};

export const LongName = Template.bind({});
LongName.args = {
	children: (
		<>
			<SmallCardTitle>
				Is It Wrong To Try To Pick Up Girls In A Dungeon?
			</SmallCardTitle>
			<SmallCardAdditionalInfo>
				<SmallCardAdditionalInfoItem>2022</SmallCardAdditionalInfoItem>
				<span className={'flex-center gap-1'}>
					<SmallCardAdditionalInfoItem>8.6</SmallCardAdditionalInfoItem>
					<AiFillStar className={'text-orange-400 opacity-100'} />
				</span>
			</SmallCardAdditionalInfo>
		</>
	),
	img: {
		src: 'https://www.denofgeek.com/wp-content/uploads/2020/07/The-Boys-Season-3.jpg?resize=768%2C432',
		alt: '',
	},
};

export const MissingImg = Template.bind({});
MissingImg.args = {
	children: (
		<>
			<SmallCardTitle>The Boys</SmallCardTitle>
			<SmallCardAdditionalInfo>
				<SmallCardAdditionalInfoItem>2022</SmallCardAdditionalInfoItem>
				<span className={'flex-center gap-1'}>
					<SmallCardAdditionalInfoItem>8.6</SmallCardAdditionalInfoItem>
					<AiFillStar className={'text-orange-400 opacity-100'} />
				</span>
			</SmallCardAdditionalInfo>
		</>
	),
	img: {
		src: '',
		alt: '',
	},
};
