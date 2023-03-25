<template>
  <nav class="d-flex align-center justify-space-between py-1 w-100">
    <div>
      <router-link to="/">
        <v-btn
          class="ml-2 link link--home"
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
          color="success"
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
