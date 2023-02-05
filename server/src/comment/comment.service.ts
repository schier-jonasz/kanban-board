import { Injectable } from "@nestjs/common";

import { CommentRepository } from "./comment.repository";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { EditCommentDto } from "./dto/edit-comment.dto";

@Injectable()
export class CommentService {
  public constructor(private readonly repository: CommentRepository) {}

  public async createComment(dto: CreateCommentDto) {
    return await this.repository.createComment(dto);
  }

  public async getCommentsByIssueId(issueId: string) {
    return await this.repository.getCommentsByIssueId(issueId);
  }

  public async editComment(commentId: string, dto: EditCommentDto) {
    return this.repository.editComment(commentId, dto);
  }

  public async removeComment(commentId: string) {
    return this.repository.deleteComment(commentId);
  }
}
