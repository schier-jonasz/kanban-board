import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Comment } from "./comment.schema";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { EditCommentDto } from "./dto/edit-comment.dto";

@Injectable()
export class CommentRepository {
  public constructor(
    @InjectModel(Comment.name)
    private readonly model: Model<Comment>
  ) {}

  public async createComment(dto: CreateCommentDto): Promise<Comment> {
    return await this.model.create(dto);
  }

  public async getCommentsByIssueId(issueId: string) {
    return this.model.find({
      issueId,
    });
  }

  public async editComment(commentId: string, dto: EditCommentDto) {
    return this.model.findOneAndUpdate({ _id: commentId }, dto, { new: true });
  }

  public async deleteComment(commentId: string) {
    return this.model.deleteOne({ _id: commentId });
  }
}
