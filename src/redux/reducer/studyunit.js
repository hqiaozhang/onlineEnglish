/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-03 18:07:56
 */

import * as types from '../action/types';

const initialState = {
  unitId: 6,
  utilList: [],
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
      console.log(state);
      return Object.assign({}, state, {
        utilList: action.data
      });
    default:
      return state;
  }
}

