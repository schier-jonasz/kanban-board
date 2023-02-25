<template>
  <nav class="d-flex align-center justify-space-between elevation-2">
    <div>
      <router-link to="/">
        <v-btn
          icon="mdi-home"
          elevation="0"
        ></v-btn>
      </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'LoginView' }">
        <v-btn
          class="login"
          variant="text"
        >
          Log in
        </v-btn>
      </router-link>
      <span>|</span>
      <router-link :to="{ name: 'RegisterView' }">
        <v-btn
          class="login"
          variant="text"
        >
          Sign in
        </v-btn>
      </router-link>
    </div>
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
