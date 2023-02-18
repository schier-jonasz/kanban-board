<template>
  <nav class="d-flex align-center justify-space-between elevation-2">
    <router-link to="/">
      <v-btn
        icon="mdi-home"
        elevation="0"
      ></v-btn>
    </router-link>
    <router-link :to="{ name: 'LoginView' }">
      <v-btn
        class="login"
        variant="text"
      >
        Sign in
      </v-btn>
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
@import '@/styles/colors.scss';
a {
  text-decoration: none;
  color: $sea-green;

  .login {
    font-weight: bold;
  }
}
</style>
