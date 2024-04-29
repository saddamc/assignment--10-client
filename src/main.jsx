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
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import DetailsProduct from './components/Product/DetailsProduct.jsx';
import Cart from './components/MyCart/Cart.jsx';
import CartDetails from './components/MyCart/CartDetails.jsx';
import UpdateCart from './components/MyCart/UpdateCart.jsx';

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
        path: '/mycart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),
      },
      {
        path: '/updatecart/:id',
        element: <PrivateRoute><UpdateCart></UpdateCart></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },
      // {
      //   path: '/cartdetails/:id',
      //   element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      // },
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
