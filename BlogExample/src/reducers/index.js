import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import modalReducer from './reducer_modal';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  modal: modalReducer
});

export default rootReducer;
