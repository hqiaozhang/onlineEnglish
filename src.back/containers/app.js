import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Studyunit from '@/containers/studyunit';

import * as homeActions from '../redux/reduces/home';


@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="home">
         Welcome to onlineEnglisth
      </div>
    );
  }
}

export default App;
