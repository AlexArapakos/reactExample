import { LOGGED_IN, LOGGED_OUT, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

export default function(state={}, action) {
	switch(action.type) {
		case LOGGED_IN:
			return { ...state, error: '', authenticated: true };
		case LOGGED_OUT:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };
		case FETCH_MESSAGE:
			return { ...state, message: action.payload }
		default:
			return state;
	}
}
