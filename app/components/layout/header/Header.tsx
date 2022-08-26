import { FC } from 'react';

import { IHeader } from '@components/layout/header/header.inteface';

import styles from './Header.module.scss';

const Header: FC<IHeader> = ({ title }) => {
	return (
		<>
			{title && (
				<header className={styles.header}>
					<span className={styles.title}>{title}</span>
				</header>
			)}
		</>
	);
};

export default Header;
