<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <h2 class="logo">Login</h2>

        <v-card-text>
          <v-form>
            <v-text-field
              id="email"
              label="E-mail"
              prepend-icon="mdi-account"
              type="email"
              v-model="email"
            />

            <v-text-field
              id="senha"
              label="Senha"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: undefined,
      senha: undefined,
    };
  },
  methods: {},
};
</script>

<style scoped>
.logo {
  text-align: center;
  justify-content: center;
  align-content: center;
}
</style>
