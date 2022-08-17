import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@components/layout/sidebar/menu/menu.interface';

import { useAuth } from '@hooks/useAuth';

import styles from './Menu.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { user } = useAuth();
	const { asPath } = useRouter();

	if (item.link === 'user')
		if (!user) return null;
		else item.link = `/user/${user?.id}`;
	return (
		<li className={asPath === item.link ? styles.active : ''}>
			<Link href={item.link}>
				<a>
					<span className={styles.icon}>
						{item.icon && <item.icon size={30} />}
					</span>
				</a>
			</Link>
		</li>
	);
};

export default MenuItem;
