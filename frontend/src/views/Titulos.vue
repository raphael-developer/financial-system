<template>
  <div>
    <div>
      <v-snackbar bottom color="error" v-model="dadosIncompletos">
        <h3>Porfavor, preencher todos os campos obrigatórios!!</h3>
        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="dadosIncompletos = false"
          >
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="error" v-model="semSucesso">
        <h3>Infelizmente não obtive nenhum titulo :/</h3>
        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="semSucesso = false">
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="success" v-model="cadastrado">
        <h3>Titulo {{ titulo.numero }} foi cadastrada com sucesso</h3>
        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="cadastrado = false">
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="orange" v-model="naoCadastrado">
        <h3>Não foi possivel cadastrar o titulo</h3>
        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="naoCadastrado = false"
          >
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="success" v-model="atualizado">
        <h3>Titulo {{ titulo.numero }} foi atualizado com sucesso</h3>
        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="atualizado = false">
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="success" v-model="naoAtualizado">
        <h3>Titulo {{ titulo.numero }} não foi atualizado com sucesso</h3>
        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="naoAtualizado = false"
          >
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="error" v-model="naoDeletado">
        <h3>Não foi possivel deletar o titulo</h3>
        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="naoDeletado = false">
            Ok
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar bottom color="error" v-model="deletado">
        <h3>Titulo {{ titulo.numero }} foi deletado com sucesso!</h3>
        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="deletado = false">
            Ok
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <v-row justify="center">
      <v-col>
        <v-card width="100%">
          <v-card-title>
            <v-btn @click="adicionarTitulo()" color="primary" dark>
              Adicionar Titulo
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquisar"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table :headers="colunas" :items="titulos" :search="search">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editarItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deletarItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="850px">
        <v-card>
          <v-card-title>
            <span class="headline">
              {{ titulo.id ? "Editar" : "Adicionar" }} titulo</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <!--  aqui são os campos de titulos. -->
              <v-row>
                <v-col cols="12" sm="12" md="7">
                  <v-text-field
                    label="Descrição"
                    v-model="titulo.descricao"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                  <v-text-field
                    label="Número"
                    v-model="titulo.numero"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                  <v-select
                    :items="['A PAGAR', 'A RECEBER']"
                    label="Tipo"
                    v-model="titulo.tipo"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                  <v-text-field
                    label="ID naturezas"
                    v-model="titulo.idNaturezaLancamento"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    type="date"
                    label="Pagamento realizado em"
                    v-model="titulo.dataPagamento"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Data de vencimento"
                    v-model="titulo.dataVencimento"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    label="Valor unitário"
                    v-model="titulo.valorUnitario"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Valor de desconto"
                    v-model="titulo.valorDesconto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Valor de juros"
                    v-model="titulo.valorJuros"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Valor da multa"
                    v-model="titulo.valorMulta"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Observacao"
                    v-model="titulo.observacao"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="salvar()">Salvar</v-btn>
            <v-btn
              color="primary"
              outlined
              dark
              @click="(dialog = false), (alert = false)"
              >Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center"></v-row>
  </div>
</template>

<script>
import apiTitulo from "../api/titulos-api";
import TituloModel from "../models/titulo-model";
// import Alerta from "../components/Alerta";

export default {
  name: "Titulo",
  // components: {
  //   Alerta,
  // },
  data() {
    return {
      search: "",
      titulos: [],
      dialog: false,
      titulo: new TituloModel(),

      // tipo: "",
      // msg: "",
      // alert: false,
      dadosIncompletos: false,
      semSucesso: false,
      cadastrado: false,
      naoCadastrado: false,
      atualizado: false,
      naoAtualizado: false,
      naoDeletado: false,
      deletado: false,

      colunas: [
        { text: "Descrição", value: "descricao" },
        { text: "Número", value: "numero" },
        { text: "Tipo", value: "tipo" },
        { text: "ID naturezas", value: "idNaturezaLancamento" },
        // { text: "Data pag", value: "dataPagamento" },
        { text: "Data de vencimento", value: "dataVencimento" },
        { text: "Valor unitário", value: "valorUnitario" },
        { text: "Valor do desconto", value: "valorDesconto" },
        { text: "Valor dos juros", value: "valorJuros" },
        { text: "Valor da multa", value: "valorMulta" },
        { text: "Observação", value: "observacao" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  created() {
    apiTitulo
      .obter()
      .then((resposta) => {
        this.titulos = resposta.data.map((n) => new TituloModel(n));
      })
      .catch((error) => {
        console.log(error);
        // this.tipo = "erro";
        this.semSucesso = true;
      });
  },

  methods: {
    salvar() {
      this.titulo.status = true;

      if (!this.titulo.modeloValido()) {
        // this.tipo = "erro";
        this.dadosIncompletos = true;
        return;
      }

      if (this.titulo.id) {
        apiTitulo
          .atualizar(this.titulo)
          .then(() => {
            // this.tipo = "sucesso";
            this.atualizado = true;
            this.atualizarTituloDaTabela(this.titulo);
            this.dialog = false;
          })
          .catch((erro) => {
            console.log(erro);
            this.naoAtualizado = true;
          });
      } else {
        apiTitulo
          .cadastrar(this.titulo)
          .then((response) => {
            // this.tipo = "sucesso";
            this.cadastrado = true;
            this.titulos.push(new TituloModel(response.data));
            this.dialog = false;
          })
          .catch((erro) => {
            console.log(erro);
            // this.tipo = "erro";
            this.cadastrado = true;
          });
      }
    },

    adicionarTitulo() {
      this.titulo = new TituloModel();
      this.dialog = true;
    },

    editarItem(item) {
      this.titulo = new TituloModel(item);
      this.dialog = true;
    },

    deletarItem(item) {
      if (confirm(`Deseja realmente deletar o item ${item.nome}?`)) {
        // Aqui salvarei no backend
        apiTitulo.deletar(item.id).then(() => {
          // this.tipo = "sucesso";
          this.deletado = true;
          this.removerTituloDaTabela(item);
        });
      }
    },

    removerTituloDaTabela(titulo) {
      let index = this.titulos.map((n) => n.id).indexOf(titulo.id);

      if (index < 0) {
        // this.tipo = "erro";
        this.naoDeletado = true;
        return;
      }

      this.titulos.splice(index, 1);
    },

    atualizarTituloDaTabela(tituloAtualizada) {
      let index = this.titulos.map((n) => n.id).indexOf(tituloAtualizada.id);

      if (index < 0) {
        // this.tipo = "erro";
        this.naoDeletado = true;
        // alert(`Não foi possível atualizar o item ${tituloAtualizada.nome}`);
        return;
      }

      this.titulos.splice(index, 1, tituloAtualizada);
    },
  },
};
</script>

<style scoped></style>