import http from '../common/http-common';
const API_URL = "assinatura/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

//const buscarAssinaturaPorusuEmail = (usuEmail) => {
//    return http.mainInstance.get(API_URL + `buscarAssinaturaPorusuEmail/${usuEmail}`);
//   };

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};



const create = data => {
    const formData = new FormData();
    formData.append('dataAssinatura', dataAssinatura);
    formData.append('codigo', data.codigo);
    formData.append('usuario_id', data.usuario_id);
    formData.append('kit_id', data.kit_id);
    formData.append('statusAssinatura', data.statusAssinatura);


    return http.mainInstance.post(API_URL + "create", formData);
};

//id				 INT		    IDENTITY,
///	dataAssinatura	 SMALLDATETIME	NOT NULL,
//	codigo			 VARCHAR(10)		NULL,
//	usuario_id		 INT			NOT NULL,
//	kit_id			 INT			NOT NULL,
//	statusAssinatura VARCHAR(10)	NOT NULL, -- ATIVO ou INATIVO

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
    buscarAssinaturaPorusuEmail,
    create,
    alterar,
   
}

export default AssinaturaService;