<template>
  
  <v-main class="content"> <!--v-main show the main content (RouterView) in accord with navbar position and size-->
    <v-container fluid>
      <RouterView />
    </v-container>
    <!--RouterView is a componant which show the selected view chosen thanks to routing (ex click on navbar link)-->
  </v-main>
  
</template>


<style>
  .content {
    padding-top: 6em;
  }
</style>