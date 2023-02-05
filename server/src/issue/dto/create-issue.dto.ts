import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import { IssuePriority, IssueStatus, IssueType } from "../issue.schema";

export class CreateIssueDto {
  @IsMongoId()
  @IsOptional()
  parentId?: string;

  @IsMongoId()
  @IsOptional()
  assigneeId?: string;

  @IsMongoId()
  authorId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(IssueType)
  @IsOptional()
  type?: string;

  @IsEnum(IssueStatus)
  @IsOptional()
  status?: string;

  @IsEnum(IssuePriority)
  @IsOptional()
  priority?: number;

  @IsString()
  description: string;
}
