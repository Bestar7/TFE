<script setup lang="ts">
  import type { ModelRef } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  const clicked: ModelRef<((...args: any[]) => void) | undefined, string> = defineModel()
</script>

<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="clicked" elevation="4"></v-app-bar-nav-icon><!--TODO menu icon-->
    <v-app-bar-title>absolut BOSS</v-app-bar-title><!--TODO CLEANUP-->
    <v-app-bar-nav-icon @click="toggleTheme" elevation="4"></v-app-bar-nav-icon><!--TODO logged-in icon-->
  </v-app-bar>
</template>