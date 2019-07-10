/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-09 13:42:04
 * @Email: 991034150@qq.com
 * @Description: 单词卡
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-09 13:52:41
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss';

export default class WordCard extends Component {
  render() {
    return (
      <div id="et-wrapper" className="et-pageshadow">
        <div id="et-page">
          <div className="nb-left-pan">
            <div className="nb-left-pan-content">
              <div className="nb-category-content">
                <ul className="nb-tree-root">
                  <li>
                    <p> 1级 － 入门级</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
