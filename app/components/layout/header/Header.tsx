import { FC } from 'react';

import { IHeader } from '@components/layout/header/header.inteface';

import styles from './Header.module.scss';

const Header: FC<IHeader> = ({ title }) => {
	return (
		<>
			{title && (
				<header className={styles.header}>
					<h1 className={styles.title}>{title}</h1>
				</header>
			)}
		</>
	);
};

export default Header;
