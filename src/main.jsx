import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider, createBrowserRouter,
} from 'react-router-dom';
import './index.css';
import About from './Pages/About';
import ProductList from './components/ProductList';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Orden from './Pages/Orden';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/orders',
    element: <ProductList />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/orden/:id',
    element: <Orden />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
