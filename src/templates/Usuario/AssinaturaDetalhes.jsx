import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {buscarAssinaturaPorusuEmail} from '../../common/services/Service'; // Ajuste o caminho conforme necessário

const AssinaturaDetalhes = () => {
    const { usuEmail } = useParams(); // Pega o email da rota
    const [assinatura, setAssinatura] = useState(null);
    const [loading, setLoading] = useState(true);

    //useEffect(() => {
    //    const fetchAssinatura = async () => {
     //       try {
    //            const response = await Service.buscarAssinaturaPorusuEmail(usuEmail);
     //           setAssinatura(response.data); // Ajuste conforme a estrutura de dados
    //            setLoading(false);
     //       } catch (error) {
    //            console.error('Erro ao buscar a assinatura:', error);
    //            setLoading(false);
    //        }
     //   };
//
    //    fetchAssinatura();
 //   }, [usuEmail]);

 const [assinaturas, setAssinaturas] = useState([]);

 useEffect(() => {
    async function getAssinatura() {
        const data = await buscarAssinaturaPorusuEmail()
        setAssinaturas(data)
    }
    getAssinatura();
}, [])

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!assinatura) {
        return <div>Nenhuma assinatura encontrada para este usuário.</div>;
    }

    return (
        <div>
            <h1>Detalhes da Assinatura</h1>
            <p>Código: {assinatura.codigo}</p>
            <p>Data da Assinatura: {assinatura.dataAssinatura}</p>
            <p>Valor: {assinatura.valor}</p>
            <p>Status: {assinatura.statusAssinatura}</p>
            {/* Adicione outros campos conforme necessário */}
        </div>
    );
};

export default AssinaturaDetalhes;
