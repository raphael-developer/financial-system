<template>
  <div>
    <v-row>
      <v-col>
        <v-card width="100%">
          <v-card-title>
           
            <v-btn @click="dialog = !dialog" color="primary" dark>Adicionar natureza</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquise"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table calculate-widths :headers="colunas" :items="naturezas" :search="search"></v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="850px">
        <v-card>
          <v-card-title>
            <span class="headline">Adicionar natureza</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <!--  aqui são os campos da natureza. -->
              <v-row>
                <v-col cols="12" sm="12" md="2">
                  <v-text-field label="Codigo" v-model="natureza.codigo"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="5">
                  <v-text-field label="Nome" v-model="natureza.nome"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                  <v-text-field label="Classificação" v-model="natureza.classificacao"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                  <v-select :items="['DEBITO', 'CREDITO']" label="Tipo" v-model="natureza.tipo"></v-select>
                </v-col>

             
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="salvar()">Salvar</v-btn>
            <v-btn color="primary" outlined dark @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import apiNatureza from "../api/naturezas-api";
import NaturezaModel from '../models/natureza-model';

export default {
  data() {
    return {
      search: "",
      colunas: [
        { text: "Código", value: "codigo" },
        { text: "Nome", value: "nome" },
        { text: "Tipo", value: "tipo" },
        { text: "Classificação", value: "classificacao" },
        { text: "", sortable: false, value: "" },
      ],
      naturezas: [],
      dialog: false,
      natureza: new NaturezaModel()
    };
  },

  created() {
    apiNatureza
      .obter()
      .then((resposta) => {
        this.naturezas = resposta.data.map(n => new NaturezaModel(n));
      })
      .catch((error) => {
        console.log(error);
        alert("Deu ruim na hora de obter as naturezas...");
      });
  },

  methods:{
    salvar(){
      console.log(this.natureza);

      if(this.natureza.modeloValido()){
        alert('Aqui vou enviar a natureza para cadastrar no back end')
      }else{
      alert('Favor preencher os campos obrigatorios.')
      }
    }
  }
};
</script>

<style scoped>
</style>
