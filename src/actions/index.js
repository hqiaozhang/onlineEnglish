import {fetch} from '@/util/request';
import * as types from './types';

// 请求成功
const studyunitSuccess = (data) => ({
  type: types.STUDYUNITSUCCESS,
  data,
});

// 单元详情
const studyunitDetailsSuccess = (data) => ({
  type: types.STUDYUNITDETAILSSUCCESS,
  data,
});

// 请求出错
const requestFailed = (data) => ({
  type: types.REQUEST_FAILED,
  data: '请求出错'
});

// 查询单元
export const rquestStudyunit = (id) => dispatch => fetch(`fetchStudyunit${id}`, (data) => {
  dispatch(studyunitSuccess(data));
});

// 查询单元详情
export const requestStudyunitDetails = (id) => dispatch => fetch(`fetchUnitDetails${id}`, (data) => {
  console.log('================', id, data);
  dispatch(studyunitDetailsSuccess(data));
});


export const changeCurrentLevel = (level) => ({
  type: 'CHANGECURRENTLEVEL',
  level,
});
