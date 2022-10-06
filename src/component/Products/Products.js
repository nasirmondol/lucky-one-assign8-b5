import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('mobile.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
    return (
        <div className='products-container'>
           <div className='products'>
            {
                products.map(product => <Product product={product}></Product>)
            }
           </div>
           <div className='cart-container'>
                <Cart></Cart>
           </div>
        </div>
    );
};

export default Products;