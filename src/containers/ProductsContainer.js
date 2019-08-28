import React, { Component } from 'react';
import Products from '../components/Products';
import Product from '../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from '../actions/index';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
            <Products products={ this.showProducts(products) } />
        );
    }

    showProducts(products){
        let listProduct = [];
        const { addToCart, changeMessage } = this.props;
        if(products && products.length > 0) {
            listProduct = products.map((product, index ) => (
                <Product key={product.id} index={index} product={product} addToCart={ addToCart } changeMessage={ changeMessage }/>
            ));
        }
        return listProduct;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    addToCart: PropTypes.func.isRequired,
    changeMessage: PropTypes.func.isRequired
}

const mapStateToProps = store => {
    return {
        products: store.products
    }
}

const mapDispatchToProps = dispatch => ({
    addToCart: product => {
        dispatch(addToCart(product, 1));
    },
    changeMessage: message => {
        dispatch(changeMessage(message));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
