import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Issue, IssueSchema } from "./issue.schema";
import { IssueRepository } from "./issue.repository";
import { IssueController } from "./issue.controller";
import { IssueService } from "./issue.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Issue.name,
        schema: IssueSchema,
      },
    ]),
  ],
  controllers: [IssueController],
  providers: [IssueRepository, IssueService],
  exports: [IssueRepository],
})
export class IssueModule {}
