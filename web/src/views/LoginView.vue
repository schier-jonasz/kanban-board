<template>
  <main class="main d-flex justify-center align-center">
    <v-card
      class="px-6 py-8 card"
      min-width="400px"
      :elevation="6"
    >
      <!-- <v-card-title class="text-center fs-10">Kanban Board</v-card-title> -->
      <template v-slot:title><h2 class="card__title text-center mb-4">Log in</h2></template>
      <v-text-field
        prepend-inner-icon="mdi-email"
        label="email"
        type="email"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        label="password"
        type="password"
      ></v-text-field>
      <v-btn
        class="mt-4 card__btn"
        color="primary"
        size="large"
        block
      >
        Sign in
      </v-btn>
    </v-card>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
@import '@/styles/colors.scss';

.main {
  min-width: 100vw;
  min-height: 100vh;
}

.card {
  &__title {
    color: $dark-purple !important;
  }
  &__btn {
    color: $anti-flash-white !important;
    font-weight: bold;
  }
}
</style>
