import http from '../common/http-common';
const API_URL = "usuario/";

const findAll = () => {
    return http.mainInstance
        .get(API_URL + 'findAll');
}
const UsuarioService = {
    findAll,
}
export default UsuarioService;