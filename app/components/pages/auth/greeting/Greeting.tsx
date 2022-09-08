import { useRouter } from 'next/router';
import { FC } from 'react';

import { PROJECT_NAME } from '@utils/constants';

import styles from './Greeting.module.scss';

const Greeting: FC = () => {
	const router = useRouter();

	return (
		<div className={styles.greeting}>
			<div className={styles.greeting_container}>
				<h2
					className={styles.greeting_container_project_name}
					onClick={() => router.push('/')}
				>
					{PROJECT_NAME}
				</h2>
				<h1 className={styles.greeting_container_title}>
					Looking for movie recommendations?
				</h1>
				<p className={styles.greeting_container_description}>
					We have you covered. Check our latest Movie recommendation and find
					movie or Tv Series just for you.
				</p>
			</div>
		</div>
	);
};

export default Greeting;
