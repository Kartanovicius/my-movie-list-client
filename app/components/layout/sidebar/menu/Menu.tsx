import { FC } from 'react';

import MenuItem from '@components/layout/sidebar/menu/MenuItem';
import { IMenuItem } from '@components/layout/sidebar/menu/menu.interface';

import styles from './Menu.module.scss';

interface IMenu {
	items: IMenuItem[];
}

const Menu: FC<IMenu> = ({ items }) => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{items.map(menuItem => {
					return <MenuItem item={menuItem} key={menuItem.link} />;
				})}
				<li className={styles.logout}></li>
			</ul>
		</nav>
	);
};

export default Menu;
