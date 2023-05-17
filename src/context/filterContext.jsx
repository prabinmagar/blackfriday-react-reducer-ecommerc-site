import { createContext, useReducer } from "react";
import rootReducer from "../reducers";
import { setGridView, setListView, priceSort, loadProducts } from "../actions/filterActions";
import { constants } from "../constants";
import PropTypes from "prop-types";

const initialState = {
    products: [],
    filtered_products: [],
    grid_view: true,
    sort_by: constants.BEST_MATCH,
}

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer.filter, initialState);
    return (
        <FilterContext.Provider value = {{
            ...state,
            setGridView, 
            setListView,
            dispatch,
            priceSort,
            loadProducts,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

FilterProvider.propTypes = {
    children: PropTypes.node.isRequired
}