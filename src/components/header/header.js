import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1,
      menus: [{
        id: 1,
        menu: 'MY COURSE',
        path: 'studyunit'
      }, {
        id: 2,
        menu: 'STUDY TOOLS',
        path: 'studytools'
      }]
    };
  }
  handleMenu(id) {
    this.setState({
      activeId: id
    });
  }
  render() {
    const {menus, activeId} = this.state;
    return (
      <div className="ue-header" >
        <ul className="ue-inner" >
          {
            menus.map(item => (
              <li key={item.id} className={item.id === activeId ? 'active' : ''} onClick={this.handleMenu.bind(this, item.id)}>
                <Link to={`/${item.path}`}>{item.menu}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

