import { actionType } from "../constants";

const productReducer = (state, action) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                productsLoading: true,
                productsError: false,
            }
        case actionType.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsLoading: false,
                productsError: false,
                products: action.payload
            }
        case actionType.GET_PRODUCTS_FAIL: 
            return {
                ...state,
                productsLoading: false,
                productsError: true,
                productsErrorMsg: action.payload
            }
        case actionType.GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                singleProductLoading: true,
                singleProductError: false
            }
        case actionType.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProductLoading: false,
                singleProductError: false,
                singleProduct: action.payload
            }
        case actionType.GET_SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                singleProductLoading: false,
                singleProductError: true,
                singleProductErrorMsg: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;