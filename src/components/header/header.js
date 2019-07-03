import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="ue-header" >
        <div className="ue-inner" >
          <Link to="/studyunit">MY COURSE</Link>
          <Link to="/docs">STUDY TOOLS</Link>
        </div>
      </div>
    );
  }
}

