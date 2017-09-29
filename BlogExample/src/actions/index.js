import axios from 'axios';

import {
	CHANGE_AUTH,
	FETCH_POSTS,
	FETCH_POST,
	CREATE_POST,
	DELETE_POST,
	TOGGLE_MODAL,
	FETCH_USERS
} from './types';

// authentication
export function authenticate(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	};
}

// blog
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hsdkjgvjrehf';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
	return {
		type: CREATE_POST,
		payload: request
	};
}

export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: DELETE_POST,
		payload: request
	};
}

// modal
export function toggleModal(state) {
	return {
		type: TOGGLE_MODAL,
		payload: state
	};
}

// middleware
const ROOT_Middleware_URL = 'http://jsonplaceholder.typicode.com';

export function fetchUsers() {
	const request = axios.get(`${ROOT_Middleware_URL}/users`);
	return {
		type: FETCH_USERS,
		payload: request
	};
}
