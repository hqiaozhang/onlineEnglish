/* eslint-disable import/no-named-as-default */
import {combineReducers} from 'redux';
import home from './home';
import studyunit from './studyunit';

export default combineReducers({
  home,
  studyunit
});
