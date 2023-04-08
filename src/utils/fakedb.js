const addToDb = id => {
    const cart = getCartFromDb()

    let quantity = 1;
    if (cart[id]) {
        quantity = cart[id] + 1
    }
    
    cart[id] = quantity
    setCartToDb(cart)
}

const removeFromDb = id => {

}

const emptyCartFromDb = () => {
    
}

const getCartFromDb = () => {
    const cart = JSON.parse(localStorage.getItem('shopping-cart')) || {}
    return cart
}

const setCartToDb = (cart) => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
}

export { addToDb, removeFromDb, emptyCartFromDb }