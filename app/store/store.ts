import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from '@store/api/api';
import { rtkQueryErrorLogger } from '@store/middlewares/error.middleware';
import { rootReducers } from '@store/root-reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	})
		.concat(rtkQueryErrorLogger)
		.concat(api.middleware),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducers>;
