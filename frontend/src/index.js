import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Services from './components/ServicesPage/Services';
import Contact from './components/ContactPage/Contact';
import Dashboard from './components/DashboardPage/Dashboard';
import Account from './components/AccountPage/Account';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Home /> } />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Services />} />
      <Route path='contact' element={<Contact />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='account' element={<Account />} />
      </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
