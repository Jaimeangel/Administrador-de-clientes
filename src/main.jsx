import React from 'react'
import ReactDOM from 'react-dom/client' 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layaout from './Components/Layaout'
import NuevoCliente,{action as nuevoClienteAction} from './Pages/NuevoCliente'
import Index,{Loader as clientsLoader} from './Pages/Index'
import './index.css'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layaout/>,
    children:[
      {
        index:true,
        element:<Index/>,
        loader:clientsLoader
      },
      {
        path:'/clientes/nuevo',
        element:<NuevoCliente/>,
        action:nuevoClienteAction
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
