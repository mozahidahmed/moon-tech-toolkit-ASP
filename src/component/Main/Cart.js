import React from 'react';
import  {useSelector}  from 'react-redux'
import ProductCard from './ProductsCard';

const Cart = () => {
    const cart=useSelector((state)=>state.cart.cart)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
            {
                cart.map(product=><ProductCard product={product}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default Cart;