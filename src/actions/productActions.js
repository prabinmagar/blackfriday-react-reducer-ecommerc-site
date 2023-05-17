import { actionType } from "../constants";
import axios from "../api/axios";

export const getAllProducts = async(dispatch) => {
    dispatch({
        type: actionType.GET_PRODUCTS_REQUEST
    });

    try{
        const { data } = await axios.get("products?limit=100");
        dispatch({
            type: actionType.GET_PRODUCTS_SUCCESS,
            payload: data.products
        });
    } catch(error){
        dispatch({
            type: actionType.GET_PRODUCTS_FAIL,
            payload: error.message
        });
    }
}

export const getSingleProduct = async(dispatch, id) => {
    dispatch({
        type: actionType.GET_SINGLE_PRODUCT_REQUEST
    });

    try{
        const { data } = await axios.get(`products/${id}`);
        dispatch({
            type: actionType.GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        });
    } catch(error){
        dispatch({
            type: actionType.GET_SINGLE_PRODUCT_FAIL,
            payload: error.message
        });
    }
}