import * as types from '../constants/ActionType';
import * as message from '../constants/Message';

const initialState = message.MSG_WELCOME;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: 
            return message.MSG_ADD_TO_CART_SUCCESS;
        case types.DELETE_PRODUCT_IN_CART:
            return message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
        case types.CHANGE_QUANTITY_IN_CART:
            return message.MSG_UPDATE_CART_SUCCESS;
        default: return state;
    }
}

export default reducer;