import React from 'react'
import ReactDOM from 'react-dom/client' 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layaout from './Components/Layaout'
import NuevoCliente,{action as nuevoClienteAction} from './Pages/NuevoCliente'
import Index,{Loader as clientsLoader} from './Pages/Index'
import ErrorPage from './Components/ErrorPage'
import EditarCliente,{Loader as editClienteLoader, Action as editClientAction} from './Pages/EditarCliente'
import './index.css'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layaout/>,
    children:[
      {
        index:true,
        element:<Index/>,
        loader:clientsLoader,
        errorElement:<ErrorPage/>
      },
      {
        path:'/clientes/nuevo',
        element:<NuevoCliente/>,
        action:nuevoClienteAction
      },
      {
        path:'/clientes/:clienteId/editar',
        element:<EditarCliente/>,
        loader:editClienteLoader,
        errorElement:<ErrorPage/>,
        action:editClientAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
