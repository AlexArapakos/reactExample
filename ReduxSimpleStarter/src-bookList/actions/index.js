// selectBook is an ActionCreator and returns an 
// Action(object with type (& payload) property)
export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}