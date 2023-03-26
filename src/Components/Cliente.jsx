import { useNavigate,Form,useActionData,redirect} from "react-router-dom";
import { eliminarCliente } from "../Data/Clientes";


export async function action({params}){
  await eliminarCliente(params.clienteId)
  return redirect('/')
}

function Cliente({cliente}) {
  const navigate=useNavigate()
    
  const {nombre,empresa,email,telefono,id}= cliente;

  return (
    <tr className="text-black border-b border-blue-400">
        <td className="py-3 pl-3">
            <p><span className="font-bold uppercase">Name: </span>{nombre}</p>
            <p><span className="font-bold uppercase">Empresa: </span>{empresa}</p>
        </td>
        <td className="py-3">
            <p><span className="font-bold uppercase">Email: </span>{email}</p>
            <p><span className="font-bold uppercase">Phone: </span>{telefono}</p>
        </td>
        <td className="py-3 space-y-1">
            <button 
              className="px-4 bg-green-500 rounded-md font-bold text-white tracking-wider"
              onClick={()=>navigate(`clientes/${id}/editar`)}
              >EDITAR</button>
            <Form
              method="post"
              action={`/clientes/${id}/eliminar`}
              onSubmit={(e)=>{
                if(!confirm('¿Desea eliminar el siguiente registro?')){
                  e.preventDefault()
                }
              }}
            >
              <button
                type="submit"
                className="px-4 bg-red-500 rounded-md font-bold text-white tracking-wider"
              >DELETE
              </button>
            </Form>
        </td>
    </tr>
  )
}

export default Cliente;
