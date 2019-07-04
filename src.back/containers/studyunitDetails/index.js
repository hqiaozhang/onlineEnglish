import React, {Component} from 'react';

import './index.scss';


export default class StudyunitDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (!this.props.data) {
      return '';
    }
    const {presentations, stepName} = this.props.data;
    return (
      <div className="ets-ui-acc-wrap ets-acc-open">
        <div className="ets-ui-acc">
          <div className="ets-ui-acc-hd" >
            <div className="ets-ui-acc-hd-main" >
              <div className="ets-ui-acc-step-title">{stepName} </div>
              <div className="ets-ui-acc-btn-close" onClick={this.props.handleClose.bind(this)} />
            </div>
          </div>
          {/* header end */}
          <div className="ets-ui-acc-bd">
            <div className="ets-ui-acc-bd-main">
              <div className="ets-activity ets-pass">
                <div className="ets-act-hd" />
                <div className="ets-act-bd">
                  <div className="ets-act-lpn-view-wrap">
                    <div className="ets-act-lpn-section ets-current">
                      {
                        presentations.map((item, index) => (
                          <div key={index} dangerouslySetInnerHTML={{__html: item.text}} />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ets-ui-acc-ft" />

        </div>
      </div>
    );
  }
}
