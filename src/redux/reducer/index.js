//合并两个reducer
import {combineReducers} from 'redux';
import studyunit from './studyunit';

const rootReducer = combineReducers({
  studyunit
});

export default rootReducer;
