import { Injectable, NotFoundException } from "@nestjs/common";

import { IssueRepository } from "./issue.repository";
import { CreateIssueDto } from "./dto/create-issue.dto";
import { EditIssueDto } from "./dto/edit-issue.dto";

@Injectable()
export class IssueService {
  public constructor(private readonly repository: IssueRepository) {}

  public async getIssueById(issueId: string) {
    const issue = await this.repository.getIssueById(issueId);

    if (!issue) {
      throw new NotFoundException(`Issue with ID ${issueId} not found`);
    }

    return issue;
  }

  public createIssue(dto: CreateIssueDto) {
    return this.repository.createIssue(dto);
  }

  public async editIssue(issueId: string, dto: EditIssueDto) {
    return this.repository.updateIssue(issueId, dto);
  }

  public async getIssuesByAssigneeId(assigneeId: string) {
    return this.repository.getIssuesByAssigneeId(assigneeId);
  }

  public async getIssuesByParentId(parentId: string) {
    return this.repository.getIssuesByParentId(parentId);
  }
}
