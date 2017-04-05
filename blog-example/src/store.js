import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk)(createStore);

export default createStoreWithMiddleware(reducers);
