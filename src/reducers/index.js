import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import cars from './cars';


const rootReducer = combineReducers({
  cars,
  toastr: toastrReducer
});

export default rootReducer;