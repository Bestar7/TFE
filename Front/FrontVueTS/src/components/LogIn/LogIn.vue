<template>
  <div id="loginModal">
    <h1>& Out</h1>
    <v-dialog width="1000" height="1000">
      
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="Open Dialog" />
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="isActive.value = false">Se co</v-btn>
            <v-btn @click="isActive.value = false">Nouv User ?</v-btn>
            <router-link to="/users/register"><v-btn color="#4CAF50">(Register) Avez-vous oublié votre mot de passe ou nom d'utilisateur?</v-btn></router-link><!--TODO move right ?-->
          </v-card-actions>
          
        </v-card>
      </template>
      
    </v-dialog>
  </div>
</template>