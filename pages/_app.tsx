import type { AppProps } from 'next/app';
import NextProgressBar from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';

import AuthProvider from '@providers/authProvider';
import { TypeComponentAuthFields } from '@providers/private-route.interface';

import { persistor, store } from '@store/store';

import '../app/styles/globals.scss';

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<>
			<NextProgressBar
				color='#ea580c'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider Component={Component}>
						<Component {...pageProps} />
						<ReduxToastr position='bottom-right' />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</>
	);
}

export default MyApp;
