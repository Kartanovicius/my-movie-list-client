import { FC } from 'react';

import Menu from '@components/layout/sidebar/menu/Menu';
import { menu } from '@components/layout/sidebar/menu/menu.data';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Menu items={menu} />
		</aside>
	);
};

export default Sidebar;
