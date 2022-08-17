import { FC } from 'react';

import Menu from '@components/layout/navigation-bar/menu/Menu';
import { menu } from '@components/layout/navigation-bar/menu/menu.data';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<>
			<div className={styles.sidebar_container}></div>
			<aside className={styles.sidebar}>
				<Menu items={menu} iconSize={30} />
			</aside>
		</>
	);
};

export default Sidebar;
