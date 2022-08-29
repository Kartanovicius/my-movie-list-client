import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Layout from '@components/layout/Layout';
import Button from '@components/ui/button/Button';

import { useAction } from '@hooks/useAction';
import { useAuth } from '@hooks/useAuth';

import { api } from '@store/api/api';

import { DATABASEFILES } from '@utils/constants';

import styles from './User.module.scss';

const User: FC = () => {
	const router = useRouter();
	const id = parseInt(router.query.id as string, 10);
	const { user } = useAuth();

	const { data: userData, isSuccess } = api.useGetProfileByIdQuery(id, {
		skip: isNaN(id),
	});

	const { logout } = useAction();

	function logoutHandler() {
		logout();
		router.push('./');
	}

	if (!isSuccess) return null;

	return (
		<Layout title='My Movie List: Profile'>
			<div className={styles.main}>
				<Image
					className={styles.avatar}
					loader={() => `${DATABASEFILES}/${userData?.avatarId}`}
					src='avatar.jpg'
					alt='Avatar Picture'
					width={200}
					height={200}
				/>
				<div className={styles.user_details}>
					<h1 className={styles.user_details__name}>{userData?.name}</h1>
					{user?.id === id && (
						<Button onClick={() => logoutHandler()}>Logout</Button>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default User;
