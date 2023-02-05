import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum IssueType {
  TASK = "task",
}

export enum IssueStatus {
  TODO = "task",
  IN_PROGRESS = "in-progress",
  DONE = "done",
}

export enum IssuePriority {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  CRITICAL = 3,
}

@Schema({
  collection: "issue",
  timestamps: true,
})
export class Issue extends Document {
  public _id: Types.ObjectId;

  @Prop()
  public parentId?: string;

  @Prop()
  public assigneeId: string;

  @Prop({ required: true })
  public authorId: string;

  @Prop({ required: true })
  public title: string;

  @Prop({ required: true, enum: IssueType, default: IssueType.TASK })
  public type: IssueType;

  @Prop({ required: true, enum: IssueStatus, default: IssueStatus.TODO })
  public status: IssueStatus;

  @Prop({ required: true, enum: IssuePriority, default: IssuePriority.MEDIUM })
  public priority: IssuePriority;

  @Prop({ required: true, default: "" })
  public description: string;
}

export const IssueSchema: any = SchemaFactory.createForClass(Issue);
