import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/componets/products.css';

export const Product = ({ product, handleAddToCart }) => {
    return (
        <div className="products-item">
            <img src={product.image} alt={product.title} />
            <div className="products-item-info">
                <h2>
                    {product.title}
                    <span>$ {product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
                <Link >
                    <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
                </Link>
        </div>
    )
}
