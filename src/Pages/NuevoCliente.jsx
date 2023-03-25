import {useNavigate,Form} from 'react-router-dom'
import FormNuevoCliente from '../Components/FormNuevoCliente';

function NuevoCliente(){
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
        <Form className='flex flex-col items-center'>
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
