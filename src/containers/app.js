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
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div className="home">
         Welcome to onlineEnglisth
      </div>
    );
  }
}

export default App;
