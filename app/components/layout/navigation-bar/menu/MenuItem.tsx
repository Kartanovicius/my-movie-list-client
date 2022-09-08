import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@components/layout/navigation-bar/menu/menu.interface';

import { useAuth } from '@hooks/useAuth';

import styles from './Menu.module.scss';

const USER = '/user';
const AUTH = '/auth';

const MenuItem: FC<{ item: IMenuItem; iconSize: number }> = ({
	item,
	iconSize,
}) => {
	const { user } = useAuth();
	const { asPath } = useRouter();

	if (item.link === USER && !user) item.link = AUTH;
	else if (item.link === AUTH && user) item.link = USER;

	return (
		<li className={asPath.split('?')[0] === item.link ? styles.active : ''}>
			<Link
				href={
					item.link === USER
						? {
								pathname: item.link,
								query: { id: user?.id },
						  }
						: { pathname: item.link }
				}
			>
				<a>
					<span className={styles.icon}>
						<item.icon size={iconSize} />
					</span>
				</a>
			</Link>
		</li>
	);
};

export default MenuItem;
