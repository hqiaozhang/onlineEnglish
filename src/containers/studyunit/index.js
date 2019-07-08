/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-04 16:41:13
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-08 16:37:18
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  rquestStudyunit,
  requestStudyunitDetails
} from '@/actions';
import StudyunitDetails from '../studyunitDetails';
import Steps from './steps';
import './index.scss';

const mapStateToProps = ({studyunit}) => ({
  unitId: studyunit.unitId,
  utilList: studyunit.utilList,
  utilDetails: studyunit.utilDetails,
  currentLevel: studyunit.currentLevel
});

class Studyunit extends Component {
  constructor(props) {
    super(props);
    const utilDetail = sessionStorage.getItem('utilDetail');
    this.state = {
      steps: [],
      cardActive: 0,
      isShowDetails: sessionStorage.getItem('isShowDetails') === 'true',
      utilDetail: utilDetail === 'undefined' ? {} : JSON.parse(utilDetail),
      dropdown: false,

      dropdownList: ['1-Beginner', '2-Beginner', '3-Beginner', '4-Elementary', '5-Elementary', '6-Elementary'],
      currentLevelDoc: ''
    };
  }
  /**
   * @description 点击单个卡片
   */
  hanldeIitem = (item, e) => {
    e.preventDefault();
    this.setState({
      steps: item.steps,
      cardActive: item.id
    });
  }
  /**
   * @description 点击每一个单元小节(查看详情)
   */
  handleStep = (index) => {
    const {cardActive} = this.state;
    const {utilDetails, unitId, currentLevel} = this.props;
    const utilDetail = utilDetails[`unit${currentLevel}_${unitId}`][`u${unitId}_${cardActive}0${index + 1}`];

    sessionStorage.setItem('utilDetail', JSON.stringify(utilDetail));
    sessionStorage.setItem('isShowDetails', true);
    this.setState({
      isShowDetails: true,
      utilDetail
    });
  }
  /**
   * @description 点击详情页关闭
   */
  handleClose = () => {
    sessionStorage.setItem('isShowDetails', false);
    this.setState({
      isShowDetails: false
    });
  }
  /**
   * @description 点击上一页
   */
  handlePrev() {
    this.props.dispatch({type: 'PREV', unitId: this.props.unitId});
    this.setState({
      steps: [],
      cardActive: ''
    });
  }
  /**
   * @description 点击下一页
   */
  handleNext() {
    this.props.dispatch({type: 'NEXT', unitId: this.props.unitId});
    this.setState({
      steps: [],
      cardActive: ''
    });
  }
  // 点击单元下拉
  handleDropdown(falg) {
    this.setState({
      dropdown: !falg
    });
  }
  /**
   * @description 点击单元级别
   * @param {*} index
   */
  handleMenu(menu, index) {
    const {dispatch} = this.props;
    dispatch({type: 'INITUNITID'});
    dispatch({type: 'CHANGECURRENTLEVEL', level: index + 1});
    this.setState({
      steps: [],
      cardActive: ''
    });
  }
  /**
   * @description render之后执行
   */
  componentDidMount() {
    const {dispatch, currentLevel} = this.props;

    // 单元课程
    dispatch(rquestStudyunit(currentLevel));
    // 单元详情
    dispatch(requestStudyunitDetails(currentLevel));
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      currentLevelDoc: this.state.dropdownList[this.props.currentLevel - 1]
    });
    // 级别发生改变，重新获取数据
    if (nextProps.currentLevel !== this.props.currentLevel) {
      this.props.dispatch(rquestStudyunit(nextProps.currentLevel));
      this.props.dispatch(requestStudyunitDetails(nextProps.currentLevel));
    }
  }
  render() {
    const {
      steps, cardActive, isShowDetails, utilDetail, dropdown, dropdownList, currentLevelDoc
    } = this.state;
    const {utilList} = this.props;
    if (utilList.length === 0) {
      return '';
    }
    const course = utilList[this.props.unitId - 1];
    return (
      <div>
        <div className="ets-ui-wrap">
          <div className="ets-chl-nav-container">
            <div className="ets-chl-nav">
              <div className="ets-chl-current-level" data-action="toggle" onClick={this.handleDropdown.bind(this, dropdown)}>
                <ul className={`ets-chl-options-course ${dropdown ? 'show' : ''}`} >
                  {
                    dropdownList.map((menu, index) => (
                      <li key={index} className={menu === currentLevelDoc ? 'ets-active' : ''} onClick={this.handleMenu.bind(this, menu, index)}>{menu}</li>
                    ))
                  }
                </ul>
                <span className="ets-chl-current-level-course">General English:</span>
                <span className="ets-chl-current-level-name">{currentLevelDoc}</span>
                <span className="ets-chl-btn" />
              </div>
            </div>
          </div>
          <div className="ets-ui-unn">
            <div className={`ets-ui-unn-btn-prev ${course.id === 1 ? 'ets-disabled' : ''}`} onClick={this.handlePrev.bind(this)} />

            <div className={`ets-ui-unn-btn-next ${course.id === utilList.length ? 'ets-disabled' : ''}`} onClick={this.handleNext.bind(this)} />
            {/* 主体内容 */}
            <div className="ets-ui-unn-bd">
              {/* unit Start */}
              <div className="ets-ui-unit">
                <div className="ets-ui-unit-hd ets-cf">
                  <h1 className="ets-overflow" title={course.ch}>
                    <strong>Unit {course.id}</strong>  <span>{course.topic}</span> </h1>
                </div>
              </div>
              {/* Locked hide start */}
              <div className="ets-ui-unit-bd ets-cf">
                <div className="ets-ui-unit-bd-content">
                  {
                    course.list.map((item, index) => (
                      <div key={item.id} className="ets-ui-lesson-container" onClick={this.hanldeIitem.bind(this, item)}>
                        <div className={`ets-ui-lesson ${item.id === cardActive ? 'ets-passed' : ''}`}>
                          <div className="ets-ui-lesson-img">
                            <img src={item.img} />
                          </div>
                          <div className="ets-ui-lesson-title" title={item.chTitle}><strong>{index + 1}</strong>{item.title}</div>
                        </div>
                      </div>
                    ))
                  }
                  {/* step start */}
                  {
                    !steps || steps.length === 0 ? '' : <Steps data={steps} handleStep={this.handleStep} />
                  }
                  {/* step end */}
                </div>
              </div>
            </div>
          </div>
          {/* 小圆点 */}
          {
            steps.length !== 0 ? '' : <div className="ets-ui-unn-ft">
              <ul className="ets-ui-unn-dots">
                {
                  utilList.map((dot, index) => (
                    <li key={index} className={`ets-ui-unn-dot ${dot.id === Number(this.props.unitId) ? 'ets-active' : ''} `} />
                  ))
                }
              </ul>
            </div>
          }
        </div>

        {/* 查看详情 */}
        {
          isShowDetails ? <StudyunitDetails data={utilDetail} handleClose={this.handleClose} /> : ''
        }
      </div>
    );
  }
}
export default connect(mapStateToProps)(Studyunit);
