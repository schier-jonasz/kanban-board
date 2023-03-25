<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <v-layout>
    <v-app-bar>
      <NavBar />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300&display=swap');
body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
* {
  box-sizing: border-box;
}
</style>
