import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import Cart from './Components/Assets/Cart.jsx';
import Menu from './Components/Menu.jsx';
import Home from './Components/Assets/Home.jsx';
import Contact from './Components/Contact.jsx';


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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
