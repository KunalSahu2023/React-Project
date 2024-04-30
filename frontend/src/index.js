import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Hero from './components/pages/Hero';
import Account from './components/pages/Account';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Deshboard from './components/pages/dashboard/Deshboard';
import Service from './components/pages/services/Service';
import Scheme from './components/pages/services/Scheme';
import DashboardBlog from './components/pages/dashboard/DashboardBlog';
import Weather from './components/pages/dashboard/Weather';
import Profile from './components/pages/dashboard/Profile';
import Event from './components/pages/dashboard/Event';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service/>} />
      <Route path='contact' element={<Contact />} />
      <Route path='account' element={<Account />} />
      <Route path='govt scheme' element={<Scheme />} />
      <Route path='/dashboard' element={<Deshboard />} />
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
