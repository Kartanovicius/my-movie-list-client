import { useRouter } from 'next/router';
import { FC } from 'react';
import { GenreEnum } from 'types/show.interface';

import Button from '@components/ui/button/Button';

import { SHOWS } from '@utils/constants';

import styles from './Genre.module.scss';

const Genre: FC = () => {
	const genres: string[] = Object.keys(GenreEnum).filter(v => isNaN(Number(v)));
	genres.unshift('all');

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
					<li key={key}>
						<Button
							size={'large'}
							rounded={'extra'}
							onClick={() => {
								onClickHandler(key);
							}}
						>
							{key}
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default Genre;
