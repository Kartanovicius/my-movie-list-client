import { useRouter } from 'next/router';
import { FC } from 'react';

import Button, { ButtonIcon } from '@components/ui/button/Button';

import styles from './Genre.module.scss';
import { genres } from './genre.data';

const Genre: FC = () => {
	const router = useRouter();
	const { query } = useRouter();

	function onClickHandler(type: string) {
		if (type === genres[0].title) {
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
					<li key={genre.title}>
						<Button
							size={'large'}
							rounded={'extra'}
							className={
								query.type !== genre.title &&
								(genre.title !== genres[0].title || query.type)
									? '!bg-cyan-700 !border-cyan-700'
									: ''
							}
							onClick={() => {
								onClickHandler(genre.title);
							}}
						>
							<ButtonIcon>{genre.icon}</ButtonIcon>
							{genre.title}
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default Genre;
