import { FC } from 'react';

import AuthContent from '@components/pages/auth/auth-content/AuthContent';
import Greeting from '@components/pages/auth/greeting/Greeting';

import Meta from '@utils/Meta';

import styles from './Auth.module.scss';

const Auth: FC = () => {
	return (
		<div className={styles.container}>
			<Meta title='My Movie List: Authorization' />
			<div className={styles.greeting}>
				<Greeting />
			</div>
			<div className={styles.auth}>
				<AuthContent />
			</div>
		</div>
	);
};

export default Auth;
