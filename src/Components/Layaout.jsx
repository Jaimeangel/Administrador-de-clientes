import { Outlet,Link,useLocation} from "react-router-dom";

function Layaout() {
  const location=useLocation()

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 px-5 py-10 bg-blue-700">
        <h2 className="text-white text-3xl font-bold text-center">CRM-CLIENTES</h2>
        <div className="mt-10">
          <Link 
            to="/" 
            className={`${location.pathname === '/' ? 'text-blue-300':'text-white'} font-bold text-xl tracking-wide block`}
            >CLIENTE</Link>
          <Link 
            to="/clientes/nuevo" 
            className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300':'text-white'} font-bold text-xl tracking-wide block`}
            >NUEVO CLIENTE</Link>
        </div>
      </aside>
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-100">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layaout;
