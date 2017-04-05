import { FETCH_POST, FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
	all: [],
	post: null
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POST:
			return Object.assign({}, state, { post: action.payload.data }); //{ ...state, post: action.payload.data };
			break;
		case FETCH_POSTS:
			return Object.assign({}, state, { all: action.payload.data }); //{ ...state, all: action.payload.data };
			break;
		default:
			return state;
	}
}