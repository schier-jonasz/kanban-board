import { IssuePriority, IssueStatus, IssueType } from '@/interfaces/issue';

import { Issue } from './issue.dto';

export default {
  getIssues: (): Promise<Issue[]> => new Promise((resolve) => setTimeout(() => resolve(issues), 1000)),
};

const issues: Issue[] = [
  {
    id: 'asdfghjkl123',
    assigneeId: 'mnxbzc1231ksa',
    authorId: 'askjdh12381askd',
    type: IssueType.TASK,
    status: IssueStatus.TODO,
    priority: IssuePriority.LOW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lectus et est mattis ornare. Suspendisse potenti. Donec turpis dui, tempor non congue eu, maximus quis libero. Praesent feugiat gravida feugiat. Nunc at sapien ipsum.',
  },
  {
    id: 'sdgsdfsadasd123',
    assigneeId: 'mnxbzc1231ksa',
    authorId: 'askjdh12381askd',
    type: IssueType.TASK,
    status: IssueStatus.TODO,
    priority: IssuePriority.LOW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lectus et est mattis ornare. Suspendisse potenti. Donec turpis dui, tempor non congue eu, maximus quis libero. Praesent feugiat gravida feugiat. Nunc at sapien ipsum.',
  },
  {
    id: 'asda123fsdfsd',
    assigneeId: 'mnxbzc1231ksa',
    authorId: 'askjdh12381askd',
    type: IssueType.TASK,
    status: IssueStatus.TODO,
    priority: IssuePriority.LOW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lectus et est mattis ornare. Suspendisse potenti. Donec turpis dui, tempor non congue eu, maximus quis libero. Praesent feugiat gravida feugiat. Nunc at sapien ipsum.',
  },
  {
    id: 'kjhkjh123ads',
    assigneeId: 'mnxbzc1231ksa',
    authorId: 'askjdh12381askd',
    type: IssueType.TASK,
    status: IssueStatus.TODO,
    priority: IssuePriority.LOW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lectus et est mattis ornare. Suspendisse potenti. Donec turpis dui, tempor non congue eu, maximus quis libero. Praesent feugiat gravida feugiat. Nunc at sapien ipsum.',
  },
];
