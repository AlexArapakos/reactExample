import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk, Async)(createStore);

export default createStoreWithMiddleware(reducers);
