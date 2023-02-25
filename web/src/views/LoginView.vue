<template>
  <main class="main d-flex flex-column justify-center align-center">
    <AuthForm :title="'Log in'" />
    <p>
      No account yet?
      <router-link :to="{ name: 'RegisterView' }">
        <span class="register-link">Register now</span>
      </router-link>
    </p>
  </main>
</template>
<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue';
</script>
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

.register-link {
  font-weight: bold;
  color: $dark-purple;
}
</style>
