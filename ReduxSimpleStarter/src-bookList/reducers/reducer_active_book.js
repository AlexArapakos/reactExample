// state argument is not application state, 
// is the state of this reducer and only
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
			break;
	}
	return state;
}