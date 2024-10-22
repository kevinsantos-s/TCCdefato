import http from '../common/http-common';
const API_URL = "assinatura/";

const findAll = () => {
    return http.mainInstance
        .get(API_URL + 'findAll');
}
const AssinaturaService = {
    findAll,
}

export default AssinaturaService;

