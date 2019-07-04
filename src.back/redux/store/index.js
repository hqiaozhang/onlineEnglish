import thunkMiddleware from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reduces';

/*
    以前创建store的方式：
    let store = createStore(reducers)
*/
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;

