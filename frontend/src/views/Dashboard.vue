<template>
  <div>
    <v-row>
      <v-col col="12" sm="4">
        <div class="meu-card">
          <v-row>
            <v-col cols="3">
              <v-img
                min-height="90"
                min-width="90"
                src="../assets/a-pagar.png"
              ></v-img>
            </v-col>

            <v-col cols="9">
              <h2>A pagar</h2>
              <h2>R${{ aPagar }}</h2>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col col="12" sm="4">
        <div class="meu-card">
          <v-row>
            <v-col cols="3">
              <v-img
                min-height="90"
                min-width="90"
                src="../assets/a-receber.png"
              ></v-img>
            </v-col>

            <v-col cols="9">
              <h2>A receber</h2>
              <h2>R${{ aReceber }}</h2>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col col="12" sm="4">
        <div class="meu-card">
          <v-row>
            <v-col cols="3">
              <v-img
                min-height="90"
                min-width="90"
                src="../assets/diferenca.png"
              ></v-img>
            </v-col>

            <v-col cols="9">
              <h2>A diferença</h2>
              <h2>R${{ diferenca }}</h2>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col col="12" sm="12">
        <GChart
          style="height: 500px"
          type="PieChart"
          :data="pieData"
          :options="chartOptions"
        />
      </v-col>
      <v-col col="12" sm="12">
        <GChart
          type="ColumnChart"
          :data="columnData"
          :options="chartOptions"
          style="box-sizing: border-box; height: 500px"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import apiTitulo from "../api/titulos-api";
import TituloModel from "../models/titulo-model";

export default {
  components: {
    GChart,
  },

  data() {
    return {
      pieData: [
        ["Descrição", "Valores"],
        ["A receber", 11],
        ["A pagar", 2],
      ],

      columnData: [
        ["Dia", "A receber", "A pagar"],
        ["21/08/2020", 1000, 400],
        ["25/08/2020", 1170, 460],
        ["12/09/2020", 660, 1120],
        ["21/09/200", 500, 0],
      ],

      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
        is3D: true,
        backgroundColor: "rgb(32, 32, 36)",
      },

      titulos: [],
      titulo: new TituloModel(),
      aPagar: 15000.00,
      aReceber: 16000.00,
      diferenca: 1000.00,
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
        alert("ERRO na obtenção dos titulos...");
      });
  },
};
</script>

<style>
.meu-card {
  background-color: rgb(32, 32, 36);
  color: rgb(255, 255, 230);
  /* max-width: 300px; */
  min-width: 300px;
  max-height: 150px;
  min-height: 150px;
  padding: 25px 0px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 5px;
  text-align: center;
}

text {
  /*TODO => Cor da font do gráfico de pizza igual a cor das fonts do card superior */
  fill: rgb(255, 255, 230);
}
</style>