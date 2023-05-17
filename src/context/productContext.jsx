import { createContext, useEffect, useReducer } from "react";
import rootReducer from "../reducers";
import { getAllProducts, getSingleProduct } from "../actions/productActions";
import PropTypes from "prop-types";

const initialState = {
    products: [],
    productsLoading: false,
    productsError: false,
    productsErrorMsg: "",
    singleProduct: [],
    singleProductLoading: false,
    singleProductError: false,
    singleProductErrorMsg: ""
}

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer.product, initialState);

    useEffect(() => {
        getAllProducts(dispatch);
    }, []);

    return (
        <ProductContext.Provider value = {{
            ...state,
            getSingleProduct,
            dispatch
        }}>
            {children}
        </ProductContext.Provider>
    )
}

ProductProvider.propTypes = {
    children: PropTypes.node
}