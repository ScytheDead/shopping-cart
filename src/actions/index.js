import * as types from '../constants/ActionType';

export const addToCart = (product, quantity) => ({
    type: types.ADD_TO_CART,
    product,
    quantity
});

export const deleteProductInCart = id => ({
    type: types.DELETE_PRODUCT_IN_CART,
    id
});

export const changeMessage = message => ({
    type: types.CHANGE_MESSAGE,
    message
});

export const changeQuantityInCart = (product, quantity) => ({
    type: types.CHANGE_QUANTITY_IN_CART,
    product,
    quantity
});