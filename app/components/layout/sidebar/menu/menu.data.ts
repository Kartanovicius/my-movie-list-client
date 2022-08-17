import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineVideoCamera,
} from 'react-icons/ai';

import { IMenuItem } from '@components/layout/sidebar/menu/menu.interface';

export const menu: IMenuItem[] = [
	{
		title: 'Home',
		icon: AiOutlineHome,
		link: '/',
	},
	{
		title: 'Movies & Tv Series',
		icon: AiOutlineVideoCamera,
		link: '/shows',
	},
	{
		title: 'User',
		icon: AiOutlineUser,
		link: '/user',
	},
];
