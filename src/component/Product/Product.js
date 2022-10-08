import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name, image, price} = props.product;
    return (
        <div className='product-container'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <div>
                <button onClick={()=> props.handleAddToCart(props.product)} className='button'><p className='p-text'>ADD TO CART</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}/>
                </button>
            </div>
        </div>
        
    );
};

export default Product;