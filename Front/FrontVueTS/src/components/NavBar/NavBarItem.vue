<script setup lang="ts">
  import { Route } from "../../config/router/routes"

  const props = defineProps(['route'])
  const route: Route = props.route
</script>
<template>
  <v-list-item link :to=route.path>{{route.linkTitle}}</v-list-item>
</template>