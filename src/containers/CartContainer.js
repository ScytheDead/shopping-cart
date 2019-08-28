import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { MSG_CART_EMPTY } from '../constants/Message';
import { deleteProductInCart, changeMessage, changeQuantityInCart } from '../actions/index';

class CartContainer extends Component {
    render() {
        const { cart } = this.props;
        return (
            <Cart listCartItem={this.showCartItem(cart)} cartResult={this.showCartResult(cart)}/>
        );
    }

    showCartItem(cart) {
        let listCartItem = [];
        const { deleteProductInCart, changeMessage, changeQuantityInCart } = this.props;
        if(cart && cart.length > 0) {
            listCartItem = cart.map((cartItem, index) => (
              <CartItem key={cartItem.product.id} 
                        cartItem={cartItem} index={index} 
                        deleteProductInCart={ deleteProductInCart } 
                        changeMessage={ changeMessage }
                        changeQuantityInCart={ changeQuantityInCart } />
            ));
        }
        return listCartItem;
    }

    showCartResult(cart){
        let cartResult = 0;
        if(cart && cart.length > 0) {
            cart.forEach(cartItem => {
                cartResult += cartItem.product.price * cartItem.quantity;
            });
            return <CartResult cartResult={cartResult} />
        }
        return <tr><td>{ MSG_CART_EMPTY }</td></tr>;
      }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    deleteProductInCart: PropTypes.func.isRequired,
    changeMessage: PropTypes.func.isRequired,
    changeQuantityInCart: PropTypes.func.isRequired
}

const mapStateToProps = store => ({
    cart: store.cart
});

const mapDispatchToProps = dispatch => ({
    deleteProductInCart: id => {
        dispatch(deleteProductInCart(id));
    },
    changeMessage: message => {
        dispatch(changeMessage(message));
    },
    changeQuantityInCart: (product, quantity) => {
        dispatch(changeQuantityInCart(product, quantity));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
