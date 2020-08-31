<template>
  <v-row>
    <v-col>
        <v-card width="100%">
        <v-card-title>
          <v-btn color="primary" dark>Adicionar natureza</v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquise"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table calculate-widths :headers="colunas" :items="itens" :search="search"></v-data-table>
      </v-card>
    </v-col>


   
  </v-row>
</template>

<script>
export default {
  data() {
    return {
        search: '',
        colunas: [
          { text: 'Código', value: 'codigo' },
          { text: 'Descrição', value: 'descricao' },
          { text: 'Tipo', value: 'tipo' },
          {text:'',  sortable: false, value:''}
        ],
        itens: [
          {
            id:1,
            descricao: 'Casa',
            codigo:'000001',
            tipo: 'debito'
          },
                  {
            id:2,
            descricao: 'Carro',
            codigo:'000002',
            tipo: 'debito'
          },
          {
            id:3,
            descricao: 'Salário',
            codigo:'000003',
            tipo: 'credito'
          }
          
        ]
    };
  },
};
</script>

<style scoped>
</style>
