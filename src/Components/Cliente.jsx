import { useNavigate } from "react-router-dom";

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
        <td className="py-3 space-x-3">
            <button 
              className="px-4 bg-green-500 rounded-md font-bold text-white tracking-wider"
              onClick={()=>navigate(`clientes/${id}/editar`)}
              >EDITAR</button>
            <button 
              className="px-4 bg-red-500 rounded-md font-bold text-white tracking-wider"
              >DELETE</button>
        </td>
    </tr>
  )
}

export default Cliente;
