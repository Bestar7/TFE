<script setup lang="ts">
  import { ref } from 'vue'

  import Drawer  from '../Drawer/Drawer.vue';
  import AppBar from '../AppBar/AppBar.vue'

  let isDrawerVisible: boolean | null | undefined = true as boolean | null | undefined ;
  const drawerState = ref(isDrawerVisible)

  const clicked = () => {
    drawerState.value = !drawerState.value
  }
</script>

<template>
  <AppBar v-model="clicked"/>
  <Drawer v-model="drawerState"/>
</template>
