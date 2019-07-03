// import {createStore, applyMiddleware, compose} from 'redux';
// import reduxOrder from 'redux-order';
// import reducers from './reduces';
// import DevTools from './DevTools';

// const enhancer = compose(
//   applyMiddleware(reduxOrder()),
//   DevTools.instrument()
// );

// const store = createStore(
//   reducers,
//   enhancer
// );

// export default store;


import * as actions from './action';
import store from './store';

const Content = {
  actions,
  store
};


export default Content;
