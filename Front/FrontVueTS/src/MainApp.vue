<script setup lang="ts">
  import NavBar from './components/NavBar/NavBar.vue'
  import Main from './components/Main/Main.vue'

</script>
<!--TODO learning 
<template> 
  <v-app style="margin-top: 60px">
    <v-main class="pt-0">
      <Navbar />
      <RouterView />
    </v-main>
  </v-app>
</template>-->
<template>
  <v-app>
    <NavBar />
    <Main />
  </v-app>
</template>