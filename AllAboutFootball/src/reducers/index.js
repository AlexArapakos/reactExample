import { combineReducers } from 'redux';
import competition_reducer from './Competition_reducer';

const rootReducer = combineReducers({
  competition: competition_reducer
});

export default rootReducer;
