import React from "react";
import './Home.css';

//Isso é um componente que pode ser reutilizado 
// é uma função JS ou TS que irá retornar uma função em HTML 
function Home() {
    return(
        // caminho abreviado ou fragment 
        <>
            <h1>Home</h1>
        </>
    );
}

//Permite que qualquer outro arquivo pode importar esse componente
export default Home;