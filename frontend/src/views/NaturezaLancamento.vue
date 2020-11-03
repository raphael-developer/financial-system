<template>
  <div>
    <app-snackbar
      :colorState="colorState"
      :snackbarState="snackbarState"
      :msg="msg"
    />
    <v-row justify="center">
      <v-col>
        <v-card width="100%">
          <v-card-title>
            <v-btn @click="adicionarNatureza()" color="primary" dark>
              Adicionar Natureza
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

          <v-data-table :headers="colunas" :items="naturezas" :search="search">
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
              {{ natureza.id ? "Editar" : "Adicionar" }} natureza</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <!--  aqui são os campos da natureza. -->
              <v-row>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    label="Codigo"
                    v-model="natureza.codigo"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="9">
                  <v-text-field
                    label="Nome"
                    v-model="natureza.nome"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                  <v-select
                    :items="['DEBITO', 'CREDITO']"
                    label="Tipo"
                    v-model="natureza.tipo"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="12" md="9">
                  <v-text-field
                    label="Classificação"
                    v-model="natureza.classificacao"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="salvar()">Salvar</v-btn>
            <v-btn color="primary" outlined dark @click="dialog = false"
              >Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import apiNatureza from "../api/naturezas-api";
import NaturezaModel from "../models/natureza-model";
import AppSnackbar from "../components/AppSnackbar";

export default {
  name: "NaturezaLancamento",

  components: {
    AppSnackbar
  },

  data() {
    return {
      search: "",
      colorState: "",
      snackbarState: false,
      msg: "",

      colunas: [
        { text: "Código", value: "codigo" },
        { text: "Nome", value: "nome" },
        { text: "Tipo", value: "tipo" },
        { text: "Classificação", value: "classificacao" },
        { text: "Actions", value: "actions", sortable: false }
      ],

      naturezas: [],
      dialog: false,
      natureza: new NaturezaModel()
    };
  },

  created() {
    apiNatureza
      .obter()
      .then(resposta => {
        this.naturezas = resposta.data.map(n => new NaturezaModel(n));
      })
      .catch(error => {
        console.log(error);
        this.snackbarState = true;
        this.colorState = "error";
        this.msg = "Infelizmente não obtive nenhuma natureza :/";
      });
  },

  methods: {
    salvar() {
      this.natureza.status = true;

      if (!this.natureza.modeloValido()) {
        this.snackbarState = true;
        this.colorState = "error";
        this.msg = "Por favor, preencher todos os campos obrigatórios!!";
        return;
      }

      if (this.natureza.id) {
        apiNatureza
          .atualizar(this.natureza)
          .then(() => {
            this.snackbarState = true;
            this.colorState = "success";
            this.msg =
              "Natureza {{ natureza.numero }} foi atualizada com sucesso";
            this.atualizarNaturezaDaTabela(this.natureza);
            this.dialog = false;
          })
          .catch(erro => {
            console.log(erro);
            this.snackbarState = true;
            this.colorState = "error";
            this.msg = `Natureza ${this.natureza.numero} não foi atualizada com sucesso`;
          });
      } else {
        apiNatureza
          .cadastrar(this.natureza)
          .then(response => {
            this.snackbarState = true;
            this.colorState = "success";
            this.msg = `Natureza ${this.natureza.numero} foi cadastrada com sucesso`;
            this.naturezas.push(new NaturezaModel(response.data));
            this.dialog = false;
          })
          .catch(erro => {
            console.log(erro);
            this.snackbarState = true;
            this.colorState = "error";
            this.msg = "Não foi possivel cadastrar a natureza";
          });
      }
    },

    adicionarNatureza() {
      this.natureza = new NaturezaModel();
      this.dialog = true;
    },

    editarItem(item) {
      this.natureza = new NaturezaModel(item);
      this.dialog = true;
    },

    deletarItem(item) {
      if (confirm(`Deseja realmente deletar o item ${item.nome}?`)) {
        // Aqui salvarei no backend
        apiNatureza.deletar(item.id).then(() => {
          this.snackbarState = true;
          this.colorState = "success";
          this.msg = `Natureza ${this.natureza.numero} foi deletada com sucesso!`;
          this.removerNaturezaDaTabela(item);
        });
      }
    },

    removerNaturezaDaTabela(natureza) {
      let index = this.naturezas.map(n => n.id).indexOf(natureza.id);

      if (index < 0) {
        this.snackbarState = true;
        this.colorState = "error";
        this.msg = "Por favor, preencher todos os campos obrigatórios!!";
        return;
      }

      this.naturezas.splice(index, 1);
    },

    atualizarNaturezaDaTabela(naturezaAtualizada) {
      let index = this.naturezas.map(n => n.id).indexOf(naturezaAtualizada.id);

      if (index < 0) {
        this.snackbarState = true;
        this.colorState = "error";
        this.msg = "Não foi possivel deletar a natureza";
        return;
      }

      this.naturezas.splice(index, 1, naturezaAtualizada);
    }
  }
};
</script>

<style scoped></style>
