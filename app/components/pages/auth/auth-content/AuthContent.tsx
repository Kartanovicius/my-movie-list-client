import Link from 'next/link';
import { FC, useState } from 'react';

import AuthForm from '@components/pages/auth/auth-form/AuthForm';

import styles from './AuthContent.module.scss';

const AuthContent: FC = () => {
	const [type, setType] = useState<'login' | 'registration'>('login');

	return (
		<div className={styles.auth_content}>
			<div className={styles.top}>
				<h1 className={styles.title}>
					{type == 'login'
						? 'Sign in'
						: type == 'registration'
						? 'Sign up'
						: ''}
				</h1>
				<p className={styles.auth_switch}>
					{type == 'login'
						? "Don't have an account?"
						: type == 'registration'
						? 'Already have an account?'
						: ''}
					{type == 'login' ? (
						<span onClick={() => setType('registration')}>Register</span>
					) : type == 'registration' ? (
						<span onClick={() => setType('login')}>Login</span>
					) : (
						''
					)}
				</p>
				<AuthForm type={type} />
			</div>
			<div className={styles.bottom}>
				<Link href={'/'}>👈 back</Link>
			</div>
		</div>
	);
};

export default AuthContent;
