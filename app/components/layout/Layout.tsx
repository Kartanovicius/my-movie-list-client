import { FC, PropsWithChildren } from 'react';

import Header from '@components/layout/header/Header';
import Navbar from '@components/layout/navigation-bar/bottombar/Navbar';
import Sidebar from '@components/layout/navigation-bar/sidebar/Sidebar';

import Meta from '@utils/Meta';

import styles from './Layout.module.scss';

const Layout: FC<
	PropsWithChildren<{
		title: string;
		description?: string;
		headerTitle?: string;
	}>
> = ({ title, description, headerTitle, children }) => {
	return (
		<div>
			<Meta title={title} description={description} />
			<main className={styles.main}>
				<Sidebar />
				<Navbar />
				<section className={styles.content}>
					<Header title={headerTitle}></Header>
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</div>
	);
};

export default Layout;
