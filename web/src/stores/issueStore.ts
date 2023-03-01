import { defineStore } from 'pinia';

import { Issue } from '@/api/issue/issue.dto';
import api from '@/api/issue/issue.service';

interface IssueStore {
  issues: Issue[];
}

export const useIssueStore = defineStore('IssueStore', {
  state: (): IssueStore => {
    return {
      issues: [],
    };
  },

  actions: {
    async fillIssues() {
      this.issues = await api.getIssues();
    },
  },
  // getters
});
