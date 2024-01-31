import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { login } from '../store/AuthSlice'
import {useSelector } from 'react-redux'

function PrivetRoutes() {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <>
    {user ? <Outlet/> : <Navigate to='/signup' />}
      
    </>
  )
}

export default PrivetRoutes
