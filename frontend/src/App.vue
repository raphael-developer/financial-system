<template>
  <v-app id="inspire">
    <app-menu v-if="mostrarMenu" />
    <v-main>
      <!-- Área principal -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppMenu from "@/components/AppMenu";
export default {
  name: "App",

  components: {
    AppMenu,
  },

  data() {
    return {
      mostrarMenu: false,
    };
  },

  created() {
    this.mostrarMenu = (this.$route.name.toLowerCase() !== "login");
  },
};
</script>

<style>
.v-btn.v-btn--contained {
  text-transform: none;
}
</style>
