import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Hero from './components/pages/Hero';
import Service from './components/pages/Service';
import Account from './components/pages/Account';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service />} />
      <Route path='contact' element={<Contact />} />
      <Route path='account' element={<Account />} />
      </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
