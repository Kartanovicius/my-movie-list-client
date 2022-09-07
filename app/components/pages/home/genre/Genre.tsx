import { useRouter } from 'next/router';
import { FC } from 'react';

import Button, { ButtonIcon } from '@components/ui/button/Button';

import { SHOWS } from '@utils/constants';

import styles from './Genre.module.scss';
import { genres } from './genre.data';

const Genre: FC = () => {
	const router = useRouter();

	function onClickHandler(key: string) {
		router.push({
			pathname: SHOWS,
			query: { type: key },
		});
	}

	return (
		<ul className={styles.list}>
			{genres.map(key => {
				return (
					<li key={key.title}>
						<Button
							size={'large'}
							rounded={'extra'}
							onClick={() => {
								onClickHandler(key.title);
							}}
						>
							<ButtonIcon>{key.icon}</ButtonIcon>
							{key.title}
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default Genre;
