import axios from 'axios';
//Biblioteca que permite fazer requisições HTTP
//O front pede e envia os dados, o axios faz a conexão e envia para o back end
//O back end retorna a informação para o axios e o axios passa a informação para o front end

export const api = axios.create({
//constante que chama a api
    baseURL: 'https://blogpessoalgn.herokuapp.com/'
    //Essa é a url base da aplicação back-end no deploy
})

    export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
        const resposta = await api.post(url,dados)
        setDado(resposta.data)
    }

    export const login = async(url: any,dados: any,setDado: any) => { 
        const resposta = await api.post(url,dados)
        setDado(resposta.data.token)
    }