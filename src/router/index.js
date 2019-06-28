import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import Header from '@/components/header/header';
import Store from '@/redux';
import DevTools from '@/redux/DevTools';
import App from '@/containers/app';
import Docs from '@/containers/docs';
import Studyunit from '@/containers/studyunit';
import StudyunitDetails from '@/containers/studyunitDetails';

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
    <Provider store={Store}>
      <div className="main_app">
        <Header />
        <div className="router-content">
          {__DEVELOPMENT__ && <DevTools />}
          <Switch>
            <Router exact path="/" component={App} />
            <Router path="/docs" component={Docs} />
            <Router path="/studyunit" component={StudyunitDetails} >
              <Router path="/studyunit/:id" component={StudyunitDetails} />
            </Router>

          </Switch>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
