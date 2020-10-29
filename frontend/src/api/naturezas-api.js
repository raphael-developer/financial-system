import axios from "axios";

const url = "http://localhost:3000";

// Função para Obter as naturezas de lançamento
function obter() {
  // Criação de uma promessa
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/naturezas-lancamento`)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

function cadastrar(natureza) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/naturezas-lancamento`, natureza)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

function atualizar(natureza) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${url}/naturezas-lancamento/${natureza.id}`, natureza)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

function deletar(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${url}/naturezas-lancamento/${id}`)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

export default {
  obter,
  cadastrar,
  atualizar,
  deletar,
};
