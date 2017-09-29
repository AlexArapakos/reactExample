import { FETCH_MATCHES } from '../actions/types';

const INITIAL_STATE = {
	competitionNames: [ 'Champions League', 'Europa League' ],
	competitionCodes: [ 'CL', 'EL' ],
	competitionState: [ 'championsLeague', 'europaLeague' ],
	currentMatches: []
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_MATCHES:
			return { ...state, currentMatches: action.payload == 'emptyList' ? [] : [...state.currentMatches, ...action.payload.data]};
			break;
		default:
			return state;
	}
}
