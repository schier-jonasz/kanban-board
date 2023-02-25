<template>
  <v-card
    class="px-6 py-8 card"
    min-width="400px"
    :elevation="6"
  >
    <!-- <v-card-title class="text-center fs-10">Kanban Board</v-card-title> -->
    <template v-slot:title>
      <h2 class="card__title text-center mb-4">{{ props.title }}</h2>
    </template>
    <v-text-field
      prepend-inner-icon="mdi-account"
      label="name"
      type="text"
    ></v-text-field>
    <v-text-field
      prepend-inner-icon="mdi-lock"
      label="password"
      :type="showPassword ? 'text' : 'password'"
    >
      <template v-slot:append-inner>
        <v-icon
          :icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click="showPassword = !showPassword"
        />
      </template>
    </v-text-field>
    <v-btn
      class="mt-4 card__btn"
      color="primary"
      size="large"
      block
    >
      {{ props.title }}
    </v-btn>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: String,
});
const showPassword = ref(false);
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
