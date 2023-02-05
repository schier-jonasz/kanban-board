import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Issue } from "./issue.schema";
import { CreateIssueDto } from "./dto/create-issue.dto";
import { EditIssueDto } from "./dto/edit-issue.dto";

@Injectable()
export class IssueRepository {
  public constructor(
    @InjectModel(Issue.name)
    private readonly model: Model<Issue>
  ) {}

  public async createIssue(dto: CreateIssueDto): Promise<Issue> {
    return await this.model.create(dto);
  }

  public async getIssueById(issueId: string) {
    return this.model.findById(issueId);
  }

  public async updateIssue(issueId: string, dto: EditIssueDto) {
    return this.model.findOneAndUpdate({ _id: issueId }, dto, { new: true });
  }

  public async getIssuesByAssigneeId(assigneeId: string) {
    return this.model.find({
      assigneeId,
    });
  }

  public async getIssuesByParentId(parentId: string) {
    return this.model.find({
      parentId,
    });
  }
}
