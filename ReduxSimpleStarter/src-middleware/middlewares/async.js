export default function({ dispatch }) {
	return next => action => {
		console.log(action);
		// check if payload is a promise
		// if action doesn't have payload or payload doesn'y have .then property
		if (!action.payload || !action.payload.then) {
			return next(action);
		}
		// when promise resolves
		action.payload
			.then(response => {
				// create new action same as old but with replaced payload(response data) 
				const newAction = { ...action, payload: response };
				dispatch(newAction);
			});
	};
}