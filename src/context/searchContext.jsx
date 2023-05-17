import {createContext, useReducer} from "react";
import rootReducer from "../reducers";
import { getSearchProducts } from "../actions/searchActions";
import PropTypes from "prop-types"; 

const initialState = {
    searchTerm: "",
    searchResult: [],
    searchLoading: false,
    searchError: false,
    searchErrorMsg: "",
}

export const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer.search, initialState);

    return (
        <SearchContext.Provider value = {{
            ...state,
            dispatch,
            getSearchProducts,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

SearchProvider.propTypes = {
    children: PropTypes.node
}