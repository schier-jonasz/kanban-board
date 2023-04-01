<template>
  <v-navigation-drawer
    permanent
    color="grey-lighten-5"
  >
    <v-list
      density="compact"
      nav
    >
      <v-list-item
        prepend-icon="mdi-home"
        title="Dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-book"
        title="Projects"
        value="projects"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Manage teams"
        value="teams"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup></script>
