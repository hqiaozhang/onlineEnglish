/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-04 18:16:20
 */

import * as types from '@/actions/types';

const initialState = {
  unitId: 6,
  utilList: [],
  utilDetails: [],
  currentLevel: 5,
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
    case 'INITUNITID':
      return Object.assign({}, state, {
        unitId: 1
      });
    case 'CHANGECURRENTLEVEL':
      console.log(action);
      return Object.assign({}, state, {
        currentLevel: 6
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
