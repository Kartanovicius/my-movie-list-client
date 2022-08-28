import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

import { api } from './api/api';
import { authSlice } from './auth/auth.slice';

export const rootReducers = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	toastr: toastrReducer,
});
