export const productsAndCartItemsLoader = async () => { 
    const res = await fetch('products.json')
    const products = await res.json()

    const savedCart = JSON.parse(localStorage.getItem('shopping-cart'))
    const cartItems = [];
    if (savedCart) {
        for (const id of savedCart) {
            const item = products.find(product => product.id === id);
            if (item) {
                item.quantity = savedCart[id];
                cartItems.push(item)
            }           
        }
    }

    return {products, cartItems}
}

