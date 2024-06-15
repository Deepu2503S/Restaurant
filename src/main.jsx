import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './Components/NavBar/Login.jsx';
import SignUp from './Components/NavBar/SignUp.jsx';
import Cart from './Components/NavBar/Cart.jsx';
import Menu from './Components/NavBar/Menu.jsx';
import Home from './Components/NavBar/Home.jsx';
import Contact from './Components/NavBar/Contact.jsx';
import Order from './Components/Assets/Order.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Menu',
        element: <Menu />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'Login',
        element: <Login />, 
      },
      {
        path : 'Cart',
        element : <Cart />,
      },
      {
        path : 'Contact',
        element : <Contact/>,
      },
      {
        path : 'Order',
        element : <Order/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
