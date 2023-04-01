<template>
  <section>
    <v-card
      class="column"
      :style="{ backgroundColor: backgroundColor }"
      :title="props.title"
    >
      <IssueItem />
      <IssueItem />
    </v-card>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IssueItem from './IssueItem.vue';

const props = defineProps({
  title: String,
  status: String,
});

const backgroundColor = computed(() => {
  switch (props.status) {
    case 'TO-DO':
      return '#E2F3FF';
    case 'IN-PROGRESS':
      return '#F7FFD6';
    case 'DONE':
      return '#D9FEE1';
    default:
      return 'white';
  }
});
</script>

<style lang="scss" scoped>
:deep(.v-card-item) {
  padding: 0;
}

:deep(.v-card) {
  padding: 8px 6px;
}

:deep(.v-card-title) {
  color: #6e7c87;
  font-weight: 600;
  font-size: 14px;
}


.column {
}
</style>
