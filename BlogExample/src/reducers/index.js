import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authenticationReducer from './authentication';
import PostsReducer from './reducer_posts';
import modalReducer from './reducer_modal';
import userReducer from './users';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  posts: PostsReducer,
  form: formReducer,
  modal: modalReducer,
  users: userReducer
});

export default rootReducer;
