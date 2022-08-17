import { FC } from 'react';

import Layout from '@components/layout/Layout';
import Catalog from '@components/pages/home/catalog/Catalog';
import Discover from '@components/pages/home/discovery/Discover';
import Genre from '@components/pages/home/genre/Genre';

const Home: FC = () => {
	return (
		<Layout title='My Movie List: Ratings, Reviews, and the Best Movies & TV Shows'>
			<Genre />
			<Discover />
			<Catalog />
		</Layout>
	);
};

export default Home;
