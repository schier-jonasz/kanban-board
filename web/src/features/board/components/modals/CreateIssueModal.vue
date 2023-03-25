<template>
  <v-row justify="center">
    <v-dialog
      v-model="isDialogOpen"
      width="800"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Create issue</span>
        </v-card-title>
        <CreateIssueContent />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="closeDialog"
          >
            CANCEL
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            @click="closeDialog"
          >
            CREATE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" setup>
import CreateIssueContent from './modals-content/CreateIssueContent.vue';

const props = defineProps({
  isDialogOpen: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(['closeDialog']);

// const isDialogOpen = ref(false);

function closeDialog() {
  emits('closeDialog');
}

// const openModal = () => {
//   isDialogOpen.value = true;
//   emit('update:isDialogOpen', isDialogOpen.value);
// };
</script>
