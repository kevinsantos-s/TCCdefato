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

export async function listarKit(){
    let URL = "kit/findAll";
    try{
        const response = await API.get(URL);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error)
        return false;
    }
}

export async function criarKit(body){
    let URL = "kit/create";
    try{
        const response = await API.post(URL, body);
        console.log(response.data);
        return response.data;
    }catch (error){
        throw new Error('NAO FOI KRL')
    }
}


