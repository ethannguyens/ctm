import * as types from './actionTypes';
import WordApi from '../api/wordApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadWordsSuccess(words) {
  return { type: types.LOAD_WORDS_SUCCESS, words};
}

export function loadWords() {
  dispatch(beginAjaxCall());
  return WordApi.getWords().then(words => {
    dispatch(loadWordsSuccess(words));
  }).catch(err => {
    throw(err)
  });
}
