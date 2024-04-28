import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Protected = () => {
    const auth = localStorage.getItem('loggedin');
  return auth ? <Outlet /> : <Navigate />;
};

export default Protected;