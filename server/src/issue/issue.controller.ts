import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateIssueDto } from "./dto/create-issue.dto";
import { EditIssueDto } from "./dto/edit-issue.dto";
import { IssueService } from "./issue.service";

@Controller("/issues")
export class IssueController {
  public constructor(private readonly service: IssueService) {}

  @Post("/")
  public async createIssue(@Body() dto: CreateIssueDto): Promise<any> {
    return this.service.createIssue(dto);
  }

  @Get("/:issueId")
  public async getIssueById(@Param("issueId") issueId: string): Promise<any> {
    return this.service.getIssueById(issueId);
  }

  @Get("/parentId/:parentId")
  public async getIssuesByParentId(
    @Param("parentId") parentId: string
  ): Promise<any> {
    return this.service.getIssuesByParentId(parentId);
  }

  @Get("/assignee/:assigneeId")
  public async getIssuesByAssigneeId(
    @Param("assigneeId") assigneeId: string
  ): Promise<any> {
    return this.service.getIssuesByAssigneeId(assigneeId);
  }

  @Put("/:issueId")
  public async editIssue(
    @Body() dto: EditIssueDto,
    @Param("issueId") issueId: string
  ): Promise<any> {
    return this.service.editIssue(issueId, dto);
  }
}
