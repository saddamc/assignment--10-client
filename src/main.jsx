import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Layout/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Product from './components/Product/Product.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import MyCart from './components/MyCart/MyCart.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import DetailsProduct from './components/Product/DetailsProduct.jsx';
import Cart from './components/MyCart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/productlist',
        element: <Product></Product>,
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: '/products/:id',
        element: <PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
        loader: () => fetch('/Product.json')
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
