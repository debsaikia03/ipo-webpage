import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserView from './components/UserView.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ForgotPass from './components/ForgotPass.jsx'
import Dashboard from './components/Dashboard.jsx'
import IPOScreen from './components/IPOScreen.jsx'
import RegisterIPO from './components/RegisterIPO.jsx'

function App() {


  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <UserView />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPass />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/ipo-screen",
      element: <IPOScreen />,
    },
    {
      path: "/register-ipo",
      element: <RegisterIPO />,
    }
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
