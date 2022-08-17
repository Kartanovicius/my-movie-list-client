import { FC } from 'react';

import MenuItem from '@components/layout/navigation-bar/menu/MenuItem';
import { IMenuItem } from '@components/layout/navigation-bar/menu/menu.interface';

import styles from './Menu.module.scss';

interface IMenu {
	items: IMenuItem[];
	iconSize: number;
}

const Menu: FC<IMenu> = ({ items, iconSize }) => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{items.map(menuItem => {
					return (
						<MenuItem item={menuItem} iconSize={iconSize} key={menuItem.link} />
					);
				})}
			</ul>
		</nav>
	);
};

export default Menu;
