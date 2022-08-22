import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import { IAuthFields } from '@components/pages/auth/auth-form/auth-form.interface';
import Button from '@components/ui/button/Button';
import Field from '@components/ui/field/Field';

import { useAction } from '@hooks/useAction';
import { useAuth } from '@hooks/useAuth';

import styles from './AuthForm.module.scss';
import { validEmail } from './auth-form.valid';

interface IAuthForm {
	type: 'login' | 'registration';
}

const AuthForm: FC<IAuthForm> = ({ type }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthFields>({ mode: 'onSubmit' });

	const { login, register: registerAction } = useAction();

	const { isLoading, user } = useAuth();

	const router = useRouter();

	useEffect(() => {
		if (user) {
			toastr.removeByType('error');
			router.push('/');
		}
	}, [isLoading, user]);

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') {
			login(data);
		} else if (type === 'registration') {
			registerAction(data);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Email is invalid',
					},
				})}
				label={'Email'}
				type={'text'}
				error={errors.email}
			/>

			<Field
				{...register('password', {
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Password must contain at least 6 characters',
					},
				})}
				label={'Password'}
				type={'password'}
				error={errors.password}
			/>
			<Button className={styles.submit} onSubmit={() => onSubmit}>
				{type === 'login'
					? 'Login'
					: type === 'registration'
					? 'Create Account'
					: ''}
			</Button>
		</form>
	);
};

export default AuthForm;
