import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import { toast } from 'react-hot-toast';
import Modal from './components/Modal';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {

  const { products, cartItems } = useLoaderData();
  const [cart, setCart] = useState(cartItems);
  const [alert, setAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (cart.length > 0 && sessionStorage.getItem('alert') !== 'true') {
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet />
        </div>
        <Footer />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
