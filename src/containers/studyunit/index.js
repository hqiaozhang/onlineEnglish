import React, {Component} from 'react';
import './index.scss';

export default class Studyunit extends Component {
  state = {
    courseList: [
      {
        img: 'https://cns.ef-cdn.com/Juno/12/22/48/v/122248/GE_4.6.1_getting_web.jpg',
        title: 'Getting information about a destination',
        id: 1
      },
      {
        img: 'https://cns.ef-cdn.com/Juno/12/22/48/v/122248/GE_4.6.1_getting_web.jpg',
        title: 'Getting information about a destination',
        id: 2
      },
      {
        img: 'https://cns.ef-cdn.com/Juno/12/22/48/v/122248/GE_4.6.1_getting_web.jpg',
        title: 'Getting information about a destination',
        id: 3,
      },
      {
        img: 'https://cns.ef-cdn.com/Juno/12/22/48/v/122248/GE_4.6.1_getting_web.jpg',
        title: 'Getting information about a destination',
        id: 4
      }
    ]
  };
  hanldeIitem = (item, e) => {
    // const {history} = this.props;
    e.preventDefault();
    const {history} = this.props;

    history.push(`/studyunit/${item.id}`);
  }
  render() {
    const {courseList} = this.state;
    return (
      <div className="ets-ui-wrap" >
        <div className="ets-chl-nav-container">
          <div className="ets-chl-nav">
            <span className="ets-chl-current-level" data-action="toggle">
              <span className="ets-chl-current-level-course">General English:</span>
              <span className="ets-chl-current-level-name">4-Elementary</span>
              <span className="ets-chl-btn" />
            </span>
          </div>
        </div>
        <div className="ets-ui-unn-bd">
          <div className="ets-ui-unit">
            <div className="ets-ui-unit-hd ets-cf">
              <h1 className="ets-overflow" title="看病">
                <strong>Unit 6</strong>  <span>Vacations</span> </h1>
            </div>
          </div>
          <div className="ets-ui-unit-bd ets-cf">
            <div className="ets-ui-unit-bd-content">
              {
                courseList.map(item => (
                  <div key={item.id} className="ets-ui-lesson-container" onClick={this.hanldeIitem.bind(this, item)}>
                    <div className="ets-ui-lesson">
                      <div className="ets-ui-lesson-img">
                        <img src="https://cns.ef-cdn.com/Juno/12/22/48/v/122248/GE_4.6.1_getting_web.jpg" />
                      </div>
                      <div className="ets-ui-lesson-title"><strong>1</strong>{item.title}</div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
