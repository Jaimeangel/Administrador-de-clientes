import { data } from "autoprefixer";
import { useLoaderData } from "react-router";
import Cliente from "../Components/Cliente";
import {ObtenerClientes} from '../Data/Clientes'

export function Loader(){
  const dataClientes=ObtenerClientes()
  return dataClientes;
}

function Index() {

  const data=useLoaderData()

  return (
    <div>
      <h1 className="font-bold text-4xl">Clientes</h1>
      <p className="text-xl mt-3">Administra tus clientes</p>

      {
        data.length && (
          <table 
            className="w-full mt-5 text-white tracking-wider shadow"
          >
            <thead className="table-auto bg-blue-700">
              <tr>
                <th className="text-center">Cliente</th>
                <th className="text-left">Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {
                data?.map(cliente=>(
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
                ))
              }
            </tbody>

          </table>
        ) 
      }
    </div>
  )
}

export default Index;
