import { FC } from 'react';

import Menu from '@components/layout/navigation-bar/menu/Menu';
import { menu } from '@components/layout/navigation-bar/menu/menu.data';

import styles from './Navbar.module.scss';

const Navbar: FC = () => {
	return (
		<nav className={styles.navbar}>
			<Menu items={menu} iconSize={25} />
		</nav>
	);
};

export default Navbar;
