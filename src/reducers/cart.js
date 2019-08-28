import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));
const initialState = data ? data : [];

const reducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            let { product, quantity } = action;
            index = state.findIndex(cartItem => cartItem.product.id === product.id);
            if (index !== -1) {
                state[index].quantity++;
            } else {
                state.push({ product, quantity });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            let { id } = action;
            index = state.findIndex(cartItem => cartItem.product.id === id);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.CHANGE_QUANTITY_IN_CART:
            index = state.findIndex(cartItem => cartItem.product.id === action.product.id);
            if(index !== -1){
                state[index].quantity = action.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default reducer;