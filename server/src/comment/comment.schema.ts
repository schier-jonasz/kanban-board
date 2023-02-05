import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
  collection: "comment",
  timestamps: true,
})
export class Comment extends Document {
  public _id: Types.ObjectId;

  @Prop({ required: true })
  public text: string;

  @Prop({ required: true })
  public authorId: string;

  @Prop({ required: true })
  public issueId: string;

  @Prop()
  public createdAt?: Date;
}

export const CommentSchema: any = SchemaFactory.createForClass(Comment);
