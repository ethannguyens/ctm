import {combineReducers} from 'redux';
import words from './wordReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  words,
  ajaxCallsInProgress
});

export default rootReducer;
