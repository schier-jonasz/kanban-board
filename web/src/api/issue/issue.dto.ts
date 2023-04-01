import { IssueType, IssuePriority, IssueStatus } from '@/interfaces/issue.ts';

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
