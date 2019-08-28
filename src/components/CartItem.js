import React, { Component } from 'react';
import { MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS } from '../constants/Message';


class CartItem extends Component {
  render () {
    const { cartItem } = this.props;
    return (
        <tr>
            <th scope="row">
                <img src={ cartItem.product.image }
                    alt={ cartItem.product.name } className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{ cartItem.product.name }</strong>
                </h5>
            </td>
            <td>{ cartItem.product.price }$</td>
            <td className="center-on-small-only">
                <span className="qty">{ cartItem.quantity } </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={ () => this.changeQuantityInCart(-1) }>
                        --
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={ () => this.changeQuantityInCart(1) }>
                        +
                    </label>
                </div>
            </td>
            <td>{ this.showSubTotal(cartItem) }$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick={ () => this.deleteProductInCart(cartItem.product.id)} >
                    X
                </button>
            </td>
        </tr>
    );
  }

  showSubTotal = cartItem => (
        cartItem.product.price * cartItem.quantity
  )

  deleteProductInCart = id => {
      const { deleteProductInCart, changeMessage } = this.props;
      deleteProductInCart(id);
      changeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  changeQuantityInCart = change => {
      const { changeQuantityInCart, cartItem, changeMessage } = this.props;
      if(cartItem.quantity + change > 0) {
        changeQuantityInCart(cartItem.product, cartItem.quantity + change);
        changeMessage(MSG_UPDATE_CART_SUCCESS);
      }
  }
}

export default CartItem;
