import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Hero from './components/pages/hero/Hero';
import About from './components/pages/about/About';
import Service from './components/pages/services/Service';
import Contact from './components/pages/contact/Contact';
import Scheme from './components/pages/services/Scheme';
import Dashboard from './components/pages/dashboard/Dashboard';
import DashboardBlog from './components/pages/dashboard/DashboardBlog';
import Weather from './components/pages/dashboard/Weather';
import Profile from './components/pages/dashboard/Profile';
import Event from './components/pages/dashboard/Event';
import Login from './components/pages/account/Login';
import Register from './components/pages/account/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='govt scheme' element={<Scheme />} />
      <Route path='service' element={<Service />} />
      <Route path='contact' element={<Contact />} />

    <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/blog' element={<DashboardBlog />} />
      <Route path='/dashboard/weather' element={<Weather/>} />
      <Route path='/dashboard/profile' element={<Profile />} />
      <Route path='/dashboard/event' element={<Event />} />
      </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
