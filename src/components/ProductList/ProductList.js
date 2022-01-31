import React, { Component } from 'react';
import Product from './../Product/Product';

class ProductList extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("ProductList.js componentDidUpdate");
    }

    renderProduct = () => {
        const { onChange, onDecrement, onIncrement, onRemove, products } = this.props;
        if (products.length === 0)
            return <div>there is no product in cart</div>

        return products.map((product, index) => {
            return (
                <Product
                    product={product}
                    key={index}
                    onDelete={() => onRemove(product.id)}
                    onIncrement={() => onIncrement(product.id)}
                    onDecrement={() => onDecrement(product.id)}
                    onChange={(e) => onChange(e, product.id)}
                />
            );
        })
    }

    render() {
        console.log("ProductList.js render");
        return (
            <div>
                {!this.props.products.length && (<div>go to shopping</div>)}
                {this.renderProduct()}
            </div>
        );
    }
}

export default ProductList;