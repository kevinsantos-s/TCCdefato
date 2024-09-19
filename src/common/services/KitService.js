import http from '../common/http-common';
const API_URL = "Kit/";

const findAll = () => {
    return http.mainInstance
        .get(API_URL + 'findAll');
}
const KitService = {
    findAll,
}
export default KitService;