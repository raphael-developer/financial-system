<template>
  <div>
    <v-navigation-drawer color="rgb(32,32,36)" v-model="drawer" app clipped>
      <!-- MENU LATERAL -->
      <v-list dense>
        <v-subheader>MENU PRINCIPAL</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            :to="rota.path"
            v-for="rota in listaDeRotas"
            :key="rota.name"
            v-show="rota.meta.requiredAuth"
          >
            <!-- AQUI SE ENCONTRARÃO OS ITENS DAS ROTAS -->
            <v-list-item-action>
              <v-icon>{{ rota.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ rota.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app clipped-left>
      <!-- MENU SUPERIOR -->
      <v-app-bar-nav-icon
        color="dark"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="app-title">Financial System</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import routes from "@/router/routes.js";

export default {
  name: "Menu",
  props: {
    source: String,
  },
  data() {
    return {
      drawer: false,
      listaDeRotas: [],
    };
  },

  created() {
    this.listaDeRotas = routes;
  },
};
</script>

<style>
.app-title {
  color: #212121;
}
</style>
