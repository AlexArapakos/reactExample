import { createStore, applyMiddleware } from 'redux';
/*import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';*/

import reducers from './reducers';
import Async from './middleware/async';

const createStoreWithMiddleware = applyMiddleware(/*promise, ReduxThunk, */Async)(createStore);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStoreWithMiddleware(reducers, reduxDevTools);
