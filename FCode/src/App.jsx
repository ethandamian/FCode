import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Toaster } from 'sonner'

import './App.css'
import Root from './Root/Root'
import Recursos from './Pages/Recursos/Recursos'
import Login from './Pages/Login/Login'
import Error from './Pages/Error/Error'
import Eventos from './Pages/Eventos/Eventos';
import Proyectos from './Pages/Proyectos/Proyectos';
import Comunidad from './Pages/Comunidad/Comunidad';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
          { path: '/', element: <Login /> },
          { path: '/recursos', element: <Recursos /> },
          { path: '/eventos', element: <Eventos /> },
          { path: '/proyectos', element: <Proyectos /> },
          { path: '/comunidad', element: <Comunidad /> }
        ]

      }
    ]
  )

  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  );
}

export default App
