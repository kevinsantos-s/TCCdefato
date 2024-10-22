import API from "./api";

export async function listarUsuario() {
    let URL = "usuario/findAll";
    try {
        const response = await API.get(URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error)
        return false;
    }
}

//export async function buscarAssinaturaPorusuEmail(usuEmail) {
//    return await axios.get(`/assinatura/buscarAssinaturaUsuario/${usuEmail}`);
//    }

export async function buscarAssinaturaPorusuEmail() {
    let URL = `/assinatura/buscarAssinaturaUsuario/${usuEmail}`;
    try {
        const response = await API.get(URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export async function listarKit(status) {
    let URL = `kit/findAll`;
    try {
        const response = await API.get(URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export async function criarKit(body) {
    let URL = "kit/create";
    try {
        const response = await API.post(URL, body);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('NAO FOI KRL')
    }
}

export async function deletarKit(id) {
    let URL = `kit/inativa/${id}`;
    try {
        const response = await API.put(URL);
        return response;
    } catch (error) {
        console.log(error)
        throw new Error("ERRO AO DELETAR " + error)

    }
}

export async function deletarUsuario(id) {
    let URL = `usuario/inativa/${id}`;
    try {
        const response = await API.put(URL);
        return response;
    } catch (error) {
        console.log(error)
        throw new Error("ERRO AO DELETAR " + error)

    }
}




