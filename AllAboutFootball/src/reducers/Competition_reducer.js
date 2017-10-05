import { 
	FETCH_MATCHES,
	FETCH_GROUP_TABLE, 
	FETCH_MATCHES_RESULTS
} from '../actions/types';

const INITIAL_STATE = {
	teams: [],
	matches: [],
	currentMatches: []
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_MATCHES:
			return { ...state, currentMatches: action.payload == 'emptyList' ? [] : [...state.currentMatches, ...action.payload]};
			break;
		case FETCH_GROUP_TABLE:
			return Object.assign({}, state, { teams: action.payload.data });
			break;
		case FETCH_MATCHES_RESULTS:
			return Object.assign({}, state, { matches: action.payload.data });
			break;
		default:
			return state;
	}
}
