import Head from 'next/head';
import { FC } from 'react';

interface IMeta {
	title: string;
	description?: string;
}

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<meta charSet='UTF-8' />
				{description ? (
					<meta
						itemProp='description'
						name='description'
						content={description}
					/>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#ea580c' />
			</Head>
		</>
	);
};

export default Meta;
