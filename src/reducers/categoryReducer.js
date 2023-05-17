import { actionType } from "../constants";

const categoryReducer = (state, action) => {
    switch(action.type){
        case actionType.CATEGORY_LIST_REQUEST:
            return {
                ...state,
                categoryLoading: true,
                categoryError: false
            }
        case actionType.CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categoryLoading: false,
                categoryError: false,
                categories: action.payload
            }
        case actionType.CATEGORY_LIST_FAIL:
            return {
                ...state,
                categoryLoading: false,
                categoryError: true,
                categoryErrorMsg: action.payload 
            }
        case actionType.CATEGORY_PRODUCT_REQUEST:
            return {
                ...state,
                categoryProductLoading: true,
                categoryProductError: false
            }
        case actionType.CATEGORY_PRODUCT_SUCCESS:
            return {
                ...state,
                categoryProductLoading: false,
                categoryProductError: false,
                categoryProducts: action.payload
            }
        case actionType.CATEGORY_PRODUCT_FAIL:
            return {
                ...state,
                categoryProductLoading: false,
                categoryProductError: true,
                categoryProducts: action.payload
            }
        default: 
            return state;
    }
}

export default categoryReducer;