import axios from 'axios';
import { browserHistory } from 'react-router';

import { LOGGED_IN, LOGGED_OUT, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return (dispatch) => {
		// Submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			// If request is good...
			.then(response => {
				// - Update state to indicate user is authenticated
				dispatch({ type: LOGGED_IN });
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				// - redirect to the route '/feture'
				browserHistory.push('/feature');
			})
			// If request is bad...
			.catch(() => {
				// - Show an error to the user
				dispatch(authError('Bad Login Info'));
			});		
	}
}

export function signupUser({ email, password }) {
	return (dispatch) => {
		// Submit email/password to the server
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				browserHistory.push('/signin');
			})
			.catch(response => {
				dispatch(authError(response.data.error));
			});		
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error	
	}
}

export function signoutUser() {
	// - Distroy the JWT token
	localStorage.removeItem('token');
	// - Update state to indicate user is not authenticated
	return { type: LOGGED_OUT };
}

export function fetchMessage() {
	return (dispatch) => {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then(response => {
				dispatch({ 
					type: FETCH_MESSAGE,
					payload: response.data.message 
				});
			});
	}
}

// fetchMessage with redux-promise syntax
/*export function fetchMessage() {
	const request = axios.get(ROOT_URL, {
		headers: { authorization: localStorage.getItem('token') }
	});
	return {
		type: FETCH_MESSAGE,
		payload: response.data.message
	}
}*/
