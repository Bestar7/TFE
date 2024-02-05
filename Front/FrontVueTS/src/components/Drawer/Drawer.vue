<script setup lang="ts">
  import routes from "../../config/router/routes"
  import type { ModelRef } from 'vue'
  import NavBarItem  from "../NavBar/NavBarItem.vue";

  const drawerState:ModelRef<boolean | null | undefined, string> = defineModel()
</script>

<template>
  <v-navigation-drawer v-model="drawerState" location="left" temporary ><!--TODO temporary vs /-->
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <span v-for="route in routes">
      <NavBarItem :route="route" />
    </span>
  </v-navigation-drawer>
</template>
