import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function wordReducer(state = initialState.words, action) {
  switch (action.type) {
    case types.LOAD_WORDS_SUCCESS:
      return action.words;
    default:
      return state;
  }
}
