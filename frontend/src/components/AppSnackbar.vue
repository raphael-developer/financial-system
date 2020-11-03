<template>
  <div id="app-snackbar">
    <v-snackbar bottom :color="colorState" v-model="snackbarState">
      <h3>{{ msg }}</h3>
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="snackbarState = false">
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    colorState: {
      type: String,
      required: true
    },

    snackbarState: {
      type: String,
      required: true
    },

    msg: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
