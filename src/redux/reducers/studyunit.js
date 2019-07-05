/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-05 16:16:42
 */

import * as types from '@/actions/types';

const initialState = {
  unitId: sessionStorage.getItem('unitId') || 1,
  utilList: [],
  utilDetails: [],
  currentLevel: sessionStorage.getItem('currentLevel') || 1,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'PREV': // 上一单元
      const unitPrevId = --action.unitId;
      sessionStorage.setItem('unitId', unitPrevId);
      return Object.assign({}, state, {
        unitId: unitPrevId
      });
    case 'NEXT': // 下一单元
      const unitNextId = ++action.unitId;
      sessionStorage.setItem('unitId', unitNextId);
      return Object.assign({}, state, {
        unitId: unitNextId
      });
    case 'INITUNITID': // 初始单元
      return Object.assign({}, state, {
        unitId: 1
      });
    case 'CHANGECURRENTLEVEL': // 修改当前单元级别
      sessionStorage.setItem('currentLevel', action.level);
      return Object.assign({}, state, {
        currentLevel: action.level
      });
    case types.STUDYUNITSUCCESS: // 获取单元数据成功
      return Object.assign({}, state, {
        utilList: action.data
      });
    case types.STUDYUNITDETAILSSUCCESS: // 获取单元详情数据成功
      return Object.assign({}, state, {
        utilDetails: action.data
      });
    default:
      return state;
  }
}
