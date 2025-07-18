// src/utils/PrivateRoute.js (or anywhere convenient)
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/Auth'; // your auth logic

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
