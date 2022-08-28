import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@components/layout/navigation-bar/menu/menu.interface';

import { useAuth } from '@hooks/useAuth';

import styles from './Menu.module.scss';

const MenuItem: FC<{ item: IMenuItem; iconSize: number }> = ({
	item,
	iconSize,
}) => {
	const { user } = useAuth();
	const { asPath } = useRouter();

	if (item.link === '/user' && !user) item.link = `/auth`;
	else if (item.link === '/auth' && user) item.link = `/user`;

	return (
		<li className={asPath === item.link ? styles.active : ''}>
			<Link
				href={{
					pathname: item.link,
					query: { id: user?.id },
				}}
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
