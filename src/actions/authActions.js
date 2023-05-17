import axios from "../api/axios";
import { actionType } from "../constants";

export const makeAuthRequest = async(dispatch, loginData) => {
    dispatch({ type: actionType.AUTH_REQUEST });
    try{
        const { data } = await axios.post(`auth/login`, JSON.stringify(loginData), {
            headers: { 'Content-Type' : 'application/json'},
        });

        dispatch({
            type: actionType.AUTH_SUCCESS, payload: data
        });
    } catch(error){
        if(!error?.response){
            dispatch({
                type: actionType.AUTH_ERROR,
                payload: "No server response!"
            });
        }

        if(error.response?.status === 400){
            dispatch({
                type: actionType.AUTH_ERROR,
                payload: "Missing username or password!"
            });
        }

        if(error.response?.status === 401){
            dispatch({
                type: actionType.AUTH_ERROR,
                payload: "Unauthorized!"
            });
        }
    }
}

export const logout = (dispatch) => {
    dispatch({ type: actionType.LOGOUT });
}
