import { useLoaderData } from "react-router";

export function Loader(){
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
  ]
  return clientes
}

function Index() {

  const data=useLoaderData()
  console.log(data)

  return (
    <div>
      <h1 className="font-bold text-5xl">Clientes</h1>
      <p className="text-xl mt-3">Administra tus clientes</p>

      {
        data.length ? (
          <table 
            className="w-full mt-5 text-white tracking-wider table-auto shadow"
          >

            <thead>
              <tr className="bg-blue-700">
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>

            </tbody>

          </table>
        ) : <h1>No hay clientes</h1>
      }
    </div>
  )
}

export default Index;
