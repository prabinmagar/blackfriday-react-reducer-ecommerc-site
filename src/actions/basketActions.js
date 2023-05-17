import { actionType } from "../constants";

export const addToBasket = (dispatch, newProduct) => {
    dispatch({
        type: actionType.ADD_TO_BASKET,
        payload: newProduct
    });
};

export const removeFromBasket = (dispatch, id) => {
    dispatch({
        type: actionType.REMOVE_FROM_BASKET,
        payload: id
    });
};

export const clearBasket = (dispatch) => {
    dispatch({
        type: actionType.CLEAR_BASKET,
    });
};

export const addQtyItem = (dispatch, id) => {
    dispatch({
        type: actionType.ADD_QTY_ITEM,
        payload: id
    });
};

export const minusQtyItem = (dispatch, id) => {
    dispatch({
        type: actionType.MINUS_QTY_ITEM,
        payload: id
    });
};

export const getBasketTotal = (dispatch) => {
    dispatch({
        type: actionType.GET_BASKET_TOTAL,
    });
};

export const setBasketMsgOn = (dispatch) => {
    dispatch({
        type: actionType.SET_BASKET_MSG_ON,
        payload: true
    });
};

export const setBasketMsgOff = (dispatch) => {
    dispatch({
        type: actionType.SET_BASKET_MSG_OFF,
        payload: false
    });
};

export const addToCheckout = (dispatch, id) => {
    dispatch({
        type: actionType.ADD_CHECKOUT_ITEM,
        payload: id
    });
};

export const removeFromCheckout = (dispatch, id) => {
    dispatch({
        type: actionType.REMOVE_CHECKOUT_ITEM,
        payload: id
    });
};

export const getCheckoutTotal = (dispatch) => {
    dispatch({
        type: actionType.GET_CHECKOUT_TOTAL,
    });
}

export const setCheckoutAll = (dispatch) => {
    dispatch({
        type: actionType.SET_CHECKOUT_ALL
    });
}

export const unsetCheckoutAll = (dispatch) => {
    dispatch({
        type: actionType.UNSET_CHECKOUT_ALL
    });
}

export const checkCheckoutAll = (dispatch) => {
    dispatch({
        type: actionType.CHECK_CHECKOUT_ALL
    })
}