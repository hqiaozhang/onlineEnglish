/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-05 16:23:20
 * @Email: 991034150@qq.com
 * @Description: 学习工具
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-05 16:55:17
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss';

class Studytools extends Component {
  render() {
    return (
      <div className="studytools">
        <div className="header">
          <h1 className="title">学习工具</h1>
        </div>
        <div className="body">
          <div className="inner">
            <a className="column column-left" href="javascript:;">
              <span className="img"><img src="https://cns1.ef-cdn.com/_imgs/school/studytools/pepper/flashcards.jpg" alt="单词卡" /></span>
              <span className="txt"><h2>单词卡</h2><p>识字卡使您能组织，复习和练习单词，然后跟踪成绩。使用每个单元的单词，或者收集您自己的单词。</p></span>
              <span className="learn-more">学习更多</span>
            </a>
            <a className="column" href="https://fanyi.baidu.com/?aldtype=16047#auto/zh" target="_blank">
              <span className="img"><img src="https://cns1.ef-cdn.com/_imgs/school/studytools/pepper/translator.jpg" alt="翻译器" /></span>
              <span className="txt"><h2>翻译器</h2><p>翻译是能将您输入的英语翻译成您的语言的字典。它使用的是牛津高阶学生字典。</p></span>
              <span className="learn-more">学习更多</span>
            </a>
            <a className="column" href="https://cns.ef-cdn.com/EtownResources/Grammar/EIndex.html" target="_blank">
              <span className="img"><img src="https://cns1.ef-cdn.com/_imgs/school/studytools/pepper/grammarguide.jpg" alt="语法指导" /></span>
              <span className="txt"><h2>语法指导</h2><p>语法指导拥有一个语法术语的完整列表。您可以选择一个术语来查看解释，规则和例子。</p></span>
              <span className="learn-more">学习更多</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Studytools);
