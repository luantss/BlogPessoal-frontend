import axios from 'axios';
//Biblioteca que permite fazer requisições HTTP
//O front pede e envia os dados, o axios faz a conexão e envia para o back end
//O back end retorna a informação para o axios e o axios passa a informação para o front end

export const api = axios.create({
//constante que chama a api
    baseURL: 'https://blogpessoalgn.herokuapp.com/'
    //Essa é a url base da aplicação back-end no deploy
})
    //O método 'async' significa que todas as funções são lidas uma após a outra
    //Para quebrar isso utilizamos o 'await' para esperar todos os dados

    export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
        const resposta = await api.post(url,dados)
        setDado(resposta.data)
    }

    export const login = async(url: any,dados: any,setDado: any) => { 
        const resposta = await api.post(url,dados)
        setDado(resposta.data.token)
    }

    //Aciona o método de busca que vai fazer uma listagem de postagem ou tema
    /*Nesse método ele pede três parametros:
        url: a rota onde quero listar os temas
        header: vai passar o token para autenticar o usuário 
    Se a api confirmar que esse é um usuário válido ela vai retornar esses dados, vai 
    armazenar dentro da variável 'resposta' e vai atribuir esses dados a função 'setDado'
    Feito isso, vai ser possível atribuir esses dados ao front-end por meio do hook
    */
    export const busca = async(url: any,setDado: any, header: any) => { 
        const resposta = await api.get(url,header)
        setDado(resposta.data)
    }

    export const buscaId = async(url: any,setDado: any, header: any) => { 
        const resposta = await api.get(url,header)
        setDado(resposta.data)
    }

    export const post = async(url: any, dados: any, setDado: any, header: any) => { 
        const resposta = await api.post(url,dados,header)
        setDado(resposta.data)
    }

    export const put = async(url: any, dados: any, setDado: any, header: any) => { 
        const resposta = await api.put(url,dados,header)
        setDado(resposta.data)
    }

    export const deleteId = async(url: any,header: any) => { 
        await api.delete(url,header)
    }