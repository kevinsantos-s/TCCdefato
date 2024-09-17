import API from "./api";

export async function listarUsuario(){
    let URL = "usuario/findAll";
    try{
        const response = await API.get(URL);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error)
        return false;
    }
}