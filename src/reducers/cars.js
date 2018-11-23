import actionTypes from '../actions';


const initialState = {}
export default function carReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CARS_SUCCESS :
      return Object.assign({}, state, {
         cars : action.payload
      });
    default:
      return state;
  }
}