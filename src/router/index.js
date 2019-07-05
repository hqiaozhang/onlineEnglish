import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import Header from '@/components/header/header';
import configureStore from '@/redux/store';
import App from '@/containers/app';
import Docs from '@/containers/docs';
import Studytools from '@/containers/Studytools';
import Studyunit from '@/containers/studyunit';

const store = configureStore();
const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="main_app">
        <Header />
        <div className="router-content">
          <Switch>
            <Router exact path="/" component={App} />
            <Router path="/docs" component={Docs} />
            <Router path="/studyunit" component={Studyunit} />
            <Router path="/studytools" component={Studytools} />
          </Switch>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
