import React, { Component } from 'react';
import { MSG_ADD_TO_CART_SUCCESS } from '../constants/Message';

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a href="/">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}

                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <button onClick={ () => this.addToCart(product) } className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addToCart = (product) => {
        const { addToCart, changeMessage } = this.props;
        addToCart(product);
        changeMessage(MSG_ADD_TO_CART_SUCCESS);
    }

    showRating(rating) {
        let result = [];
        if (rating && rating > 0) {
            for (let i = 0; i < rating; i++) {
                result.push(
                    <li key={ result.length + 1 }>
                        <i className="fa fa-star"></i>
                    </li>
                );
            }
            for (let i = 0; i < 5 - rating; i++) {
                result.push(
                    <li key={ result.length + 1 }>
                        <i className="fa fa-star-o"></i>
                    </li>
                );
            }
        }
        return result;
    }
}

export default Product;
