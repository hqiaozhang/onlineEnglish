import React, {Component} from 'react';
import './index.scss';

export default class StudyunitDetails extends Component {
  render() {
    return (
      <div className="ets-ui-wrap" >
        <div className="ets-act-hd" />
        <div className="ets-act-lpn-view-wrap">
          <div className="ets-act-lpn-section ets-current">
            <li>It's often windy.	<span>常常刮风。</span></li>
            <li>It's so cold and cloudy.	<span>天很阴，又很冷。</span></li>
            <li>It gets to 115 degrees Fahrenheit. That's, like, 46 degrees Celsius!	<span>温度达到华氏 115 度，相当于 46 摄氏度。</span></li>
            <li>Fall is perfect.	秋天很美。</li>
            <li>Winter is terrible.	冬天很糟。</li>
            <li>t's lovely in spring.	春天真美。</li>
          </div>
        </div>
      </div>
    );
  }
}
