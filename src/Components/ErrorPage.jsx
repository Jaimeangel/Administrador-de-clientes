import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const errores=useRouteError()
  return (
    <div className="text-center bg-white rounded-md shadow pb-7 pt-7 mt-10">
        <h1 className="text-5xl font-bold">CMR CLIENTES ERROR</h1>
        <p className="text-3xl font-bold mt-5">Hubo un error</p>
        <p className="text-2xl font-bold mt-3">{errores.message}</p>
    </div>
  )
}

export default ErrorPage;
