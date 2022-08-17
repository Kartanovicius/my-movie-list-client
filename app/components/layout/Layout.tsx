import { FC, PropsWithChildren } from 'react';

import Header from '@components/layout/header/Header';
import Sidebar from '@components/layout/sidebar/Sidebar';

import Meta from '@utils/Meta';

import styles from './Layout.module.scss';

const Layout: FC<
	PropsWithChildren<{ title: string; description?: string }>
> = ({ title, description, children }) => {
	return (
		<div>
			<Meta title={title} description={description} />
			<main className={styles.main}>
				<Sidebar />
				<section className={styles.content}>
					<Header></Header>
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</div>
	);
};

export default Layout;
