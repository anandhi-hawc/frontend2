// src/utils/RoleRoute.js (or anywhere convenient)
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../services/Storage';


const RoleRoute = ({ children, allowedRoles = [] }) => {
  const role = getUserRole();
  return allowedRoles.includes(role)
    ? children
    : <Navigate to="/login" replace />;
};

export default RoleRoute;