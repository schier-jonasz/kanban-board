<template>
  <nav class="d-flex align-center justify-space-between elevation-2 py-1">
    <div>
      <router-link to="/">
        <v-btn
          class="link link--home"
          variant="flat"
        >
          HOME
        </v-btn>
      </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'LoginView' }">
        <v-btn
          class="link"
          variant="outlined"
        >
          Log in
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'RegisterView' }">
        <v-btn
          class="link mx-4"
          variant="flat"
          color="primary"
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

  .link {
    font-weight: bold;

    &--home {
      color: $dark-purple;
    }
  }
}
</style>
