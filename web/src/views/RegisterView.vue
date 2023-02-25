<template>
  <main class="main d-flex justify-center align-center">
    <AuthForm :title="'Sign in'" />
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
