import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const { loading, isAuthenticated } = useSelector((state) => state.auth);
   
   if(loading)
   {
       return <h1>Loading</h1>
   }
   if(loading==false)
   {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    } else {
        return children;
    }
   }
}
export default ProtectedRoute;