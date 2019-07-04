/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-04 14:04:49
 */

import * as types from '../action/types';

const initialState = {
  unitId: 6,
  utilList: [],
  utilDetails: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'PREV':
      return Object.assign({}, state, {
        unitId: --initialState.unitId
      });
    case 'NEXT':
      return Object.assign({}, state, {
        unitId: ++initialState.unitId
      });
    case types.STUDYUNITSUCCESS:
      return Object.assign({}, state, {
        utilList: action.data
      });
    case types.STUDYUNITDETAILSSUCCESS:
      return Object.assign({}, state, {
        utilDetails: action.data
      });
    default:
      return state;
  }
}
