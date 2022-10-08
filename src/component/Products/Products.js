import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    // console.log(cart)

    useEffect(() => {
      fetch('mobile.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, []);

    const handleAddToCart = product =>{
        const products = [];
        let newCart = [...cart, product];
        setCart(newCart);
       setCart = [];
    }
    return (
        <div className='container1'>
        <div className='text-container'>
            <h1 className='heading'>It will be confused you</h1>
            <h4 className='heading'>You can choose only four items phone</h4>
        </div>
        <div className='products-container'>
           <div className='products'>
            {
                products.map(product => <Product
                    handleAddToCart={handleAddToCart}
                    key={product.id} 
                    product={product}
                    ></Product>)
            }
           </div>
           <div className='cart-container'>
                <Cart cart={cart} setCart={setCart}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Products;