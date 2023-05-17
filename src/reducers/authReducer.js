import { actionType } from "../constants/index";
import { storeInLocalStorage } from "../utils/helpers";

const authReducer = (state, action) => {
    switch(action.type){
        case actionType.AUTH_REQUEST:
            return {
                ...state,
                authLoading: true
            }
        case actionType.AUTH_SUCCESS:
            storeInLocalStorage({ isLoggedIn: true, info: action.payload}, "authData");
            return {
                ...state,
                authLoading: false,
                authData: {
                    isLoggedIn: true,
                    info: action.payload
                }
            }
        case actionType.AUTH_ERROR: 
            return {
                ...state,
                authLoading: false,
                authError: true,
                authErrorMsg: action.payload
            }
        case actionType.LOGOUT:
            storeInLocalStorage({ isLoggedIn: false, info: {}}, "authData");
            return {
                ...state,
                authData: {
                    isLoggedIn: false,
                    info: {}
                }
            }
        default:
            return state;
    }
}

export default authReducer;

