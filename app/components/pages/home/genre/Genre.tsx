import { useRouter } from 'next/router';
import { FC } from 'react';

import Button, { ButtonIcon } from '@components/ui/button/Button';

import { toTitleCase } from '@utils/textConverter';

import styles from './Genre.module.scss';
import { genres } from './genre.data';

const Genre: FC = () => {
	const router = useRouter();
	const { query } = useRouter();

	function onClickHandler(type: string) {
		if (type === genres[0].name) {
			router.push({
				pathname: '',
			});
		} else {
			router.push({
				pathname: '',
				query: { type },
			});
		}
	}

	return (
		<ul className={styles.list}>
			{genres.map(genre => {
				return (
					<li key={genre.name}>
						<Button
							size={'large'}
							rounded={'extra'}
							className={
								query.type !== genre.name &&
								(genre.name !== genres[0].name || query.type)
									? '!bg-cyan-700 !border-cyan-700'
									: ''
							}
							onClick={() => {
								onClickHandler(genre.name);
							}}
						>
							<ButtonIcon>{genre.icon}</ButtonIcon>
							{toTitleCase(genre.name)}
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default Genre;
