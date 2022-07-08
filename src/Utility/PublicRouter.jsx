import React from 'react';
import UseAuth from "./UseAuth";
import { Navigate, Outlet } from "react-router-dom"

const PublicRouter = () => {
  const auth = UseAuth();
  return (
    auth ? <Navigate to="/blog" /> : <Outlet />

  )
}

export default PublicRouter