import { useLoaderData,Form,useNavigate,useActionData,redirect} from "react-router-dom";
import {ObtenerClienteId,editarClienteId} from '../Data/Clientes'
import FormNuevoCliente from "../Components/FormNuevoCliente";
import ErrorCall from "../Components/ErrorCall";

export async function Loader({params}){
    const idCliente=params.clienteId;
    const dataClienteId= await ObtenerClienteId(idCliente)
    if(Object.values(dataClienteId).length===0){
        throw new Response('',{
            status:404,
            statusText:'No hay resultados'
        })
    }
    return dataClienteId
}

export async function Action({request,params}){
    const idCliente=params.clienteId;
    const formData= await request.formData()
    const datos=Object.fromEntries(formData)
    const email=formData.get('email')
  
    const errores=[]
  
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
  
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  
    if(!regex.test(email)){
      errores.push('El formato de email no es valido')
    }
  
  
    if(errores.length>0){
      return errores
    }
  
    await editarClienteId(datos,idCliente)
    
    return redirect('/');
}

function EditarCliente() {

    const navigate=useNavigate()
    const dataClienteEditar=useLoaderData()
    const errores=useActionData()

    return (
        <div>
      
        <h1 className="font-bold text-4xl">Editar un cliente</h1>
        <p className="text-xl mt-3">Llena todos los campos para editar un cliente</p>
        
        <div className="flex justify-end">
          <button
            className="bg-blue-700 text-white font-bold px-5 py-1 rounded-md tracking-wider"
            onClick={()=>navigate(-1)}
          >
            VOLVER
          </button>
        </div>
  
        <div className="md:w-3/4 bg-white mx-auto mt-10 p-6 rounded-md shadow">
  
          {
            errores?.length && errores.map((err,index)=>(
              <ErrorCall key={index}>{err}</ErrorCall>
            ))
          }
  
          <Form 
            className='flex flex-col items-center'
            method='post'
            noValidate
          >
            <FormNuevoCliente
                cliente={dataClienteEditar}
            />
  
            <input 
              type="submit"
              value="Guardar Cambios"
              className="w-3/4 mt-3 px-6 py-2 text-lg bg-green-500 rounded-md font-bold text-white tracking-wider cursor-pointer uppercase" 
            />
  
          </Form>
  
        </div>
  
      </div>
    )
}

export default EditarCliente;
