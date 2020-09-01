import axios from 'axios';


// Função obter que busca no backend no endpoint as naturezas de lançamento.
function obter(){

    // Aqui estyou criando um apromisse (Promessa que vou tentar obter as naturezas)
    return new Promise((resolve,  reject) => {
        axios.get('http://localhost:3000/naturezas-lancamento')
        .then(response => resolve(response)) // Cai aqui se tudo der certo
        .catch(error => reject(error));  // Cai aqui se tudo der errado.
    })
}

function cadastrar(){

}

function atualizar(){

}

export default {
    obter,
    cadastrar,
    atualizar
}