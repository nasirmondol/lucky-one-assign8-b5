import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props)
    // console.log(props.cart)
    // const {name, image} = props.cart;

    return (
        <div className='cart'>
            <h3 className='text'>Buy this lucky one</h3>
                {
                    props?.cart?.map(singleCart => <div className='cart-child'
                        key={singleCart.id}
                        >
                        <img  className='image' width={25} height={25} src={singleCart.image} alt="" />
                        <h3 className='cart-text'> {singleCart.name}</h3>
                    </div>)
                }
                
                <button className='cart-button'>CHOOSE 1 FOR ME</button>
                <button className='btn-remove' onClick={()=>props.setCart()}>
                CHOOSE AGAIN
                </button>
        </div>
    );
};

export default Cart;