import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import '../styles/componets/products.css';
import { Product } from './Product';

export const Products = () => {

    const {state: { products }, addToCart} = useContext(AppContext);

    const handleAddToCart = (product) => () => {
        addToCart(product);
    }

    return (
        <div className="products">
            <div className="products-items">
                {
                    products.map(product => (
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                    ))
                }
            </div>
        </div>
    )
}
