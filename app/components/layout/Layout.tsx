import { FC, PropsWithChildren } from 'react';

import Header from '@components/layout/header/Header';
import Sidebar from '@components/layout/sidebar/Sidebar';

import Meta from '@utils/Meta';

import style from './Layout.module.scss';

const Layout: FC<
	PropsWithChildren<{ title: string; description?: string }>
> = ({ title, description, children }) => {
	return (
		<div>
			<Meta title={title} description={description} />
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
