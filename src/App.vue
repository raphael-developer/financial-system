<template>
  <v-app >
    <Menu/>

    <v-main>
      <v-container
      >
       <router-view/>
      </v-container>
    </v-main>


  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue';

  export default {
    props: {
      source: String,
    },
     components: {
      Menu
    },
    data: () => ({

    }),
    created () {
      
    },
  }
</script>