export async function ObtenerClientes(){
    const URL=import.meta.env.VITE_API_URL
    const response= await fetch(URL)
    const responseData= await response.json()
    return responseData;
}

export async function agregarCliente(data){
    try {
        const URL=import.meta.env.VITE_API_URL
        const posting= await fetch(URL,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        await posting.json();
    } catch (error) {
        console.log(error)
    }
}

export async function ObtenerClienteId(id){
    const URL=import.meta.env.VITE_API_URL
    const response= await fetch(`${URL}/${id}`)
    const responseData= await response.json()
    return responseData;
}

export async function editarClienteId(data,id){
    try {
        const URL=import.meta.env.VITE_API_URL
        const posting= await fetch(`${URL}/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        await posting.json();
    } catch (error) {
        console.log(error)
    }
}