<script setup lang="ts">
  sessionStorage.clear(); // Clear session storage
  localStorage.clear(); // Clear local storage

  // Clear cookies
  document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "rt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // TODO export this to function
  
  import { useRouter } from "vue-router";
  //window.location.href = "/hello"; // TODO another way to redirect, no ?
  // this is not a SPA, it reloads the app altogether.

  import routes from "../../config/router/routes"
  const router = useRouter()

  router.push(routes[1].path)// TODO this is disgusting '[2]'... find a better way!
</script>

<template>
  <div>
    <h1>Baiiiiii</h1>
  </div>
</template>