import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, image, price} = props.product;
    return (
        <div className='product-container'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <div>
                <button className='button'><p className='p-text'>ADD TO CART</p></button>
            </div>
        </div>
        
    );
};

export default Product;