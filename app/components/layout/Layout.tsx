import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

import Header from '@components/layout/header/Header';
import Sidebar from '@components/layout/sidebar/Sidebar';

import style from './Layout.module.scss';

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children,
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={style.main}>
				<Sidebar />
				<section className={style.content}>
					<Header></Header>
					<div className={style.wrapper}>{children}</div>
				</section>
			</main>
		</div>
	);
};

export default Layout;
