import * as types from './types';
import {fetch} from '@/util/request';

export const increaseAction = (num = 1) => ({
  type: types.INCREASE,
  num
});

// ajax
const ajaxData_start = (data) => ({
  type: types.AJAX_START,
  data,
});
const studyunitSuccess = (data) => ({
  type: types.STUDYUNITSUCCESS,
  data,
});
const ajaxData_error = (data) => {
  console.log(data);
  return {
    type: types.AJAX_ERROR,
    data: '请求出错'
  };
};
const _rquestStudyunit = () => dispatch => {
  dispatch(ajaxData_start('获取数据'));
  return fetch('fetchStudyunit', (data) => {
    dispatch(studyunitSuccess(data));
  });
};

export const rquestStudyunit = () => dispatch => dispatch(_rquestStudyunit());
