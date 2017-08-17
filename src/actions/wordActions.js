import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ajax from '../../app/api/ajax';

const port = process.env.PORT || 3000;

export function loadWordsSuccess(words) {
  return {type: types.LOAD_WORDS_SUCCESS, words};
}

export function loadWords(callback) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return ajax(`http://localhost:${port}/data`, words => {
      dispatch(loadWordsSuccess(words));
      if (callback) callback();
    });
  };
}
