import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './Root/Root'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Error from './Pages/Error/Error'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <Error/>,
        children: [
          {path: '/', element: <Login/>},
          {path: '/login', element: <Login/>},
          {path: '/home', element: <Home/>}
        ]

      }
    ]
  )

  return <RouterProvider router={router}/>
}

export default App
