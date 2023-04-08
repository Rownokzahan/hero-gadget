import React, { useContext } from 'react'
import { CartContext } from '../../App';
import { addToDb } from '../../utils/fakedb';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {

  const { cart, setCart } = useContext(CartContext)
  const { name, picture, price, category } = product

  const handleAddtoCart = product => {
    let newCart = []
    const exist = cart.find(item => item.id === product.id)

    if (!exist) {
      product.quantity = 1
      newCart = [...cart, product]
      
    } else {
      exist.quantity += 1
      const remaining = cart.filter(item => item.id !== product.id)
      newCart = [...remaining, exist]      
    }
    
    setCart(newCart)
    addToDb(product.id)

    toast.success('Product Added! 🛒')
  }

  return (
    <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={picture}
        alt={name}
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Category: {category}</p>
      <p className='text-gray-700 font-bold'>Price: {price}$</p>
      <button
        onClick={() => handleAddtoCart(product)}
        type='button'
        className='btn-primary w-full block'
      >
        Add To Cart
      </button>
    </div>
  )
}

export default ProductCard
