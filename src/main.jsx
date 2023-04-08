import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import About from './components/About'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productsAndCartItemsLoader } from './Loaders/productsAndCartItemsLoader'
import { Toaster } from 'react-hot-toast'
import Modal from './components/Modal'


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <App />,
        loader: productsAndCartItemsLoader,
        children: [
            {
                path: '/',
                element: <Home/>
            },

            {
                path: '/shop',
                element: <Shop/>
            },

            {
                path: '/cart',
                element: <Cart/>
            },

            {
                path: '/about',
                element: <About/>
            },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster />
        <RouterProvider router={router} />
    </>
)
