import { FC } from 'react';

import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<span className={styles.title}>My cinema</span>
		</header>
	);
};

export default Header;
