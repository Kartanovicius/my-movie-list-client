import {
	Middleware,
	MiddlewareAPI,
	isRejectedWithValue,
} from '@reduxjs/toolkit';

import { toastError } from '@utils/toastr-api.utils';

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		// RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
		if (isRejectedWithValue(action)) {
			toastError(action.erro, 'RTK error');
		}

		return next(action);
	};
