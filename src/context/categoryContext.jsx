import {createContext, useEffect, useReducer} from "react";
import rootReducer from "../reducers";
import { getCategoriesList, getCategoryProducts } from "../actions/categoryActions";
import PropTypes from "prop-types";

const initialState = {
    categoryLoading: false,
    categoryError: false,
    categoryErrorMsg: "",
    categories: [],
    categoryProductLoading: false,
    categoryProductError: false,
    categoryProducts: []
}

export const CategoryContext = createContext({});

export const CategoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer.category, initialState);

    useEffect(() => {
        getCategoriesList(dispatch);
    }, [dispatch]);


    return (
        <CategoryContext.Provider value = {{
            ...state,
            getCategoriesList,
            getCategoryProducts,
            dispatch
        }}>
            {children}
        </CategoryContext.Provider>
    )
}

CategoryProvider.propTypes = {
    children: PropTypes.node
}