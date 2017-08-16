import * as types from './actionTypes';
//import WordApi from '../api/wordApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const words = {
  of: { count: 1058, prime: false },
  said: { count: 1145, prime: false },
  it: { count: 1161, prime: false },
  a: { count: 1181, prime: true },
  to: { count: 1553, prime: true },
  and: { count: 2473, prime: true },
  the: { count: 3366, prime: false }
};

export function loadWordsSuccess(words) {
  return { type: types.LOAD_WORDS_SUCCESS, words};
}

export function loadWords() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    dispatch(loadWordsSuccess(words));
  };
  // return WordApi.getWords().then(words => {
  //   dispatch(loadWordsSuccess(words));
  // }).catch(err => {
  //   throw(err)
  // });
}
