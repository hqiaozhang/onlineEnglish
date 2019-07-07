/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-05 17:12:52
 * @Email: 991034150@qq.com
 * @Description: 单元详情列表
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-05 17:26:05
 */
import React, {Component} from 'react';

export default class Steps extends Component {
  render() {
    const {data, handleStep} = this.props;
    return (
      <div className="ets-ui-step-container">
        <div className="ets-ui-steps-wrap ets-expanded">
          <ul className="ets-ui-steps">
            {
              data.map((step, index) => (
                <li key={index} className="ets-ui-step-bd">
                  <div className={`ets-ui-step ${step.isDetail !== false ? 'ets-passed' : ''}`} onClick={handleStep.bind(this, index)}>
                    <div className="ets-ui-step-index">{index + 1}</div>
                    <div className="ets-ui-step-type ets-overflow">{step.title}</div>
                    <div className="ets-ui-step-title ets-overflow" title={step.ch}>{step.contain}</div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
