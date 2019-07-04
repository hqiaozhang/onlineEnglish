import {fetch} from '@/util/request';
import * as types from './types';

// 请求成功
const studyunitSuccess = (data) => ({
  type: types.STUDYUNITSUCCESS,
  data,
});

const studyunitDetailsSuccess = (data) => ({
  type: types.STUDYUNITDETAILSSUCCESS,
  data,
});

// 请求出错
const requestFailed = (data) => ({
  type: types.REQUEST_FAILED,
  data: '请求出错'
});
export const rquestStudyunit = () => dispatch => fetch('fetchStudyunit', (data) => {
  dispatch(studyunitSuccess(data));
});

export const requestStudyunitDetails = () => dispatch => fetch('fetchUnitDetails', (data) => {
  dispatch(studyunitDetailsSuccess(data));
});

