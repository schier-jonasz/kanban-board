<template>
  <main>
    <header>
      <h2>Project name</h2>
    </header>
    <section>
      <v-container>
        <v-row>
          <v-col>
            <!-- <v-card title="Status">
              <v-list>
                <v-list-item
                  v-for="issue in issueStore.issues"
                  :key="issue.id"
                  :value="issue.id"
                  rounded="xl"
                >
                  <v-list-item-title>{{ issue.id }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card> -->
            <IssueColumn
              title="TO DO"
              status="TO-DO"
            />
          </v-col>
          <v-col>
            <IssueColumn
              title="IN PROGRESS"
              status="IN-PROGRESS"
            />
          </v-col>
          <v-col>
            <IssueColumn
              title="DONE"
              status="DONE"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useIssueStore } from '@/stores/issueStore';

import IssueColumn from '../components/IssueColumn.vue';

const issueStore = useIssueStore();

issueStore.fillIssues();

setTimeout(() => console.log(issueStore.issues), 2000);
/*
Alternative version if I would like direct access:
To make reactive - import { storeToRefs } from 'pinia';
const { issues } = storeToRefs(useIssueStore());
*/
</script>
