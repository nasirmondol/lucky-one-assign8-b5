import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const {name, image} = props.cart;

    return (
        <div className='cart'>
            <h3 className='text'>Buy this lucky one</h3>
            <div className='cart-child'>
                <img  className='image' width={25} height={25} src={image} alt="" />
                <h3> {name}</h3>
            </div>
        </div>
    );
};

export default Cart;