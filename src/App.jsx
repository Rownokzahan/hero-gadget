import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {

  const { products, cartItems } = useLoaderData(); 
  const [cart, setCart] = useState(cartItems);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <ProductContext.Provider value={products}>
        <Header cart={cart} />
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet />
        </div>
        <Footer />
      </ProductContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
