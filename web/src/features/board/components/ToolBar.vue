<template>
  <v-toolbar
    density="compact"
    color="white"
  >
    <CreateIssueModal
      :isDialogOpen="isDialogOpen"
      @closeDialog="() => (isDialogOpen = false)"
    />
    <v-spacer></v-spacer>
    <v-btn
      color="success"
      variant="flat"
      prepend-icon="mdi-plus"
      @click="openModal"
    >
      Add issue
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import CreateIssueModal from './modals/CreateIssueModal.vue';

const isDialogOpen = ref(false);
const openModal = () => {
  console.log('openModal');
  isDialogOpen.value = true;
};
</script>
