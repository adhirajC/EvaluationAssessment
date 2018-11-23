
import {toastr} from 'react-redux-toastr'
import actionTypes from './'
import { axios }  from '../utils'



export const getCars = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get("/cars");
            if(response.data){
                return  dispatch({
                    type: actionTypes.FETCH_CARS_SUCCESS,
                    payload: response.data.cars,
                });
            }
        }catch(e){
            toastr.error(e.message)
        }
      
       
    };
};