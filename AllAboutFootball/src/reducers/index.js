import { combineReducers } from 'redux';
import championsLeague_reducer from './CL_reducer';
import europaLeague_reducer from './EL_reducer';
import competition_reducer from './Competition_reducer';

const rootReducer = combineReducers({
  championsLeague: championsLeague_reducer,
  europaLeague: europaLeague_reducer,
  competition: competition_reducer
});

export default rootReducer;
