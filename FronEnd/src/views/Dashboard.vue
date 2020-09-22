<template>
  <div class="about">
      <v-row>
        <v-col col="12" sm="4">
          <div class="meu-card">
            <h2>A pagar</h2>
            <h3>R$15.000,00</h3>
          </div>
        </v-col>

        <v-col col="12" sm="4">
          <div class="meu-card">
            <h2>A receber</h2>
            <h3>R$16.000,00</h3>
          </div>
        </v-col>

        <v-col col="12" sm="4">
          <div class="meu-card">
            <h2>Diferença</h2>
            <h3>R$1.000,00</h3>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col col="12" sm="12">
            <GChart
             style=" height: 500px;"
              type="PieChart"
              :data="pieData"
              :options="chartOptions"
             
            />
        </v-col>
      </v-row>

      <v-row>
        <v-col col="12" sm="12">
            <GChart
              type="ColumnChart"
              :data="columnData"
              :options="chartOptions"
              style="box-sizing:border-box; height: 500px;"
             
            />
        </v-col>
      </v-row>

  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },

  data(){
    return{
      pieData: [
          ['Descrição', 'Valores'],
          ['A receber',     11],
          ['A pagar',      2],
      ],
      columnData: [
        ['Dia', 'A receber', 'A pagar'],
        ['21/08/2020', 1000, 400],
        ['25/08/2020', 1170, 460],
        ['12/09/2020', 660, 1120],
        ['21/09/200', 500, 0]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',

      
        },
        is3D: true,
        // backgroundColor: 'rgb(32,32,36)',
      }
    }
  },

  methods:{
    criarGraficoPizza(){

    }
  },
  created(){
    this.criarGraficoPizza();
  }
}
</script>

<style scoped>

.meu-card{
  background-color: rgb(32,32,36);
  color:rgb(225,225,230);
  /* max-width: 300px; */
  max-height: 150px;
  min-width: 300px;
  min-height: 150px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 5px;
  text-align: center;
}
</style>
