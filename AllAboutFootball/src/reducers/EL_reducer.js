import { FETCH_EL_GROUP_TABLE, FETCH_EL_MATCHES_RESULTS } from '../actions/types';

const INITIAL_STATE = {
	teams: [],
	matches: [],
	groups: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' ],
	matchDays: [ '1', '2', '3', '4', '5', '6' ]
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_EL_GROUP_TABLE:
			return Object.assign({}, state, { teams: action.payload.data });
			break;
		case FETCH_EL_MATCHES_RESULTS:
			return Object.assign({}, state, { matches: action.payload.data });
			break;
		default:
			return state;
	}
}
