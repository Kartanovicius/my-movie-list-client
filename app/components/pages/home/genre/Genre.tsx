import Link from 'next/link';
import { FC } from 'react';
import { GenreEnum } from 'types/show.interface';

import Button from '@components/ui/button/Button';

import { SHOWS } from '@utils/constants';

import styles from './Genre.module.scss';

const Genre: FC = () => {
	const genres: string[] = Object.keys(GenreEnum).filter(v => isNaN(Number(v)));
	genres.unshift('all');

	return (
		<ul className={styles.list}>
			{genres.map(key => {
				return (
					<li key={key}>
						<Link
							href={{
								pathname: SHOWS,
								query: { type: key },
							}}
						>
							<Button size={'large'} rounded={'extra'}>
								{key}
							</Button>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Genre;
