import { createContext, useReducer } from "react";
import rootReducer from "../reducers";
import { makeAuthRequest, logout } from "../actions/authActions";
import { fetchFromLocalStorage } from "../utils/helpers";
import PropTypes from 'prop-types'

const fetchAuthData = () => {
    let authData = fetchFromLocalStorage("authData");
    if(authData.length === 0) return authData = { isLoggedIn: false, info: {} }
    return authData;
}

const initialState = {
    authLoading: false,
    authError: false,
    authData: fetchAuthData(),
    authErrorMsg: ""
}

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer.auth, initialState);

    return (
        <AuthContext.Provider value = {{
            ...state,
            makeAuthRequest,
            dispatch,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
