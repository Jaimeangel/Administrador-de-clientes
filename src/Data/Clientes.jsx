export async function ObtenerClientes(){
    const URL=import.meta.env.VITE_API_URL
    const response= await fetch(URL)
    const responseData= await response.json()
    return responseData;
}