import {useNavigate,Form,useActionData} from 'react-router-dom'
import FormNuevoCliente from '../Components/FormNuevoCliente';
import ErrorCall from '../Components/ErrorCall';

export async function action({request}){
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
  
  return null;
}

function NuevoCliente(){

  const errores=useActionData()
  const navigate=useNavigate()

  return (
    <div>
      
      <h1 className="font-bold text-4xl">Crea un nuevo cliente</h1>
      <p className="text-xl mt-3">Llena todos los campos para crear con exito un nuevo cliente</p>
      
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
          <FormNuevoCliente/>

          <input 
            type="submit"
            value="Registrar Cliente"
            className="w-3/4 mt-3 px-6 py-2 text-lg bg-green-500 rounded-md font-bold text-white tracking-wider cursor-pointer uppercase" 
          />

        </Form>

      </div>

    </div>
  )
}

export default NuevoCliente;
