import React, { useContext } from 'react';
import { ProductContext } from '../App';
import ProductCard from './Cards/ProductCard';

const Shop = () => {

    const products = useContext(ProductContext);

    return (
        <div className='my-container'>
            <div className='grid grid-cols-3 gap-8'>
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

export default Shop;