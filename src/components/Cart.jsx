import React, { useContext } from 'react';
import { CartContext } from '../App';
import CartItem from './Cards/CartItem';
import { emptyCartFromDb } from '../utils/fakedb';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Cart = () => {

    const { cart, setCart } = useContext(CartContext)

    let totalAmount = 0;

    if (cart.length > 0) {
        for (const item of cart) {
            totalAmount += item.price * item.quantity
        }
    }

    const handleClearCart = () => {
        setCart([])
        emptyCartFromDb()

        toast.error('All Items Removed!')
    }

    const handlePlaceOrder = () => {
        setCart([])
        emptyCartFromDb()

        toast.success('Order Placed! 📦')
    }

    return (

        <div className='bg-gray-100 min-h-[calc(100vh-137px)]'>
            <div className='my-container max-w-max md:w-max flex flex-col gap-4 mx-auto'>

                <h3 className='text-2xl font-semibold'>
                    {cart.length > 0 ? 'Review Cart Items' : 'Cart is EMPTY!'}
                </h3>

                <div className='divide-y-2'>
                    {cart.map(product => <CartItem
                        key={product.id}
                        product={product}
                    />)}
                </div>

                <div className='text-end'>
                    <p>Total amount: <span className='font-semibold'> { totalAmount }$ </span></p>
                    <p className='text-gray-400'>Not including taxes and shipping costs</p>
                </div>

                <div className='text-end'>

                    {cart.length > 0 ?
                        <>
                            <button onClick={() => handleClearCart()} className='btn-outlined'>
                                Clear Cart
                            </button>

                            <button onClick={() => handlePlaceOrder()} className='btn-primary'>
                                Place Order
                            </button>
                        </>
                        : <Link to='/shop'><button className='btn-outlined'>Back To Shop</button></Link>
                    }
                                       
                </div>
            </div>
        </div>

    );
};

export default Cart;