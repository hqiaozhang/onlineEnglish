
import {combineReducers} from 'redux';
import studyunit from './studyunit';
import home from './home';

//  combineReducers 用来把多个 reducer 创建成一个根 reducer，即合并所有reducer
const rootReducer = combineReducers({
  studyunit,
  home
});

export default rootReducer;
