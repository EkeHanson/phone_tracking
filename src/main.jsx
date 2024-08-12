import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Registration from './Components/Registration/Registration.jsx';
import Login from './Components/Login/Login.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
 
  {
    path: "/register",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <LandingPage/>,
  },
 
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
