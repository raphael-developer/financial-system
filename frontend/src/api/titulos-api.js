import axios from "axios";

const url = "http://localhost:3000";

// Função para Obter os titulos
function obter() {
  // Criação de uma promessa
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/titulos`)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

function cadastrar(titulo) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/titulos`, titulo)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

function atualizar(titulo) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${url}/titulos/${titulo.id}`, titulo)
      .then(response => resolve(response)) // Caso der certo
      .catch(error => reject(error)); // Caso der errado
  });
}

function deletar(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${url}/titulos/${id}`)
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
