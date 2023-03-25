<template>
  <v-card-item>
    <div>
      <v-radio-group
        v-model="issueType"
        inline
        label="Type issue"
      >
        <v-radio
          label="Task"
          value="task"
          color="purple"
        ></v-radio>
        <v-radio
          label="Story"
          value="story"
          color="blue"
        ></v-radio>
      </v-radio-group>
      <v-select
        label="Select"
        :items="items"
      >
        <template #item="{ item }">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ item.text }}
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
    </div>
    <v-text-field
      clearable
      label="Title"
      variant="solo"
    >
      <template v-slot:prepend>
        <span>Title</span>
      </template>
    </v-text-field>
  </v-card-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const issueType = ref('task');
const items = ref([
  { text: 'Option 1', icon: 'mdi-check' },
  { text: 'Option 2', icon: 'mdi-close' },
  { text: 'Option 3', icon: 'mdi-star' },
]);
/*
export interface Issue {
  id: string;
  title: string;
  assigneeId: string;
  authorId: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  description: string;
  parentId?: string;
}

*/
</script>
