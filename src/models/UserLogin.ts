interface UserLogin {
    //interface descreve a estrutura de um objeto que vai enviar e receber do back end
    //Quando o back end retornar vai vir com as informações completas
    id: number;
    nome?: string | null;
    usuarioLogin: string;
    senha: string;
    foto?: string| null;
    token?: string | null;
    //A interrogação da a possibilidade de o campo não ser obrigatório
}

export default UserLogin;