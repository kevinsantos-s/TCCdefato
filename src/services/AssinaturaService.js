import http from '../common/http-common';
const API_URL = "assinatura/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const buscarAssinaturaUsuario = (id) => {
    return http.mainInstance.get(API_URL + `buscarAssinaturaUsuario/${id}`);
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const alterar = (id, data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('descricao', data.descricao);
    formData.append('produtos', data.produtos);
    formData.append('preco', data.preco);
    formData.append('statusKit', data.statusKit);

    return http.mainInstance.put(API_URL + `alterar/${id}`, formData);
}



const AssinaturaService = {
    findAll,
    findById,
    alterar,
    buscarAssinaturaUsuario
}

export default AssinaturaService;