import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { EditCommentDto } from "./dto/edit-comment.dto";
import { CommentService } from "./comment.service";

@Controller("/comments")
export class CommentController {
  public constructor(private readonly service: CommentService) {}

  @Post("/")
  public async addComment(@Body() dto: CreateCommentDto): Promise<any> {
    return this.service.createComment(dto);
  }

  @Get("/:issueId")
  public async getCommentsByIssueId(@Param("issueId") issueId: string) {
    return this.service.getCommentsByIssueId(issueId);
  }

  @Patch("/:commentId")
  public async editComment(
    @Param("commentId") commentId: string,
    @Body() dto: EditCommentDto
  ): Promise<any> {
    return this.service.editComment(commentId, dto);
  }

  @Delete("/:commentId")
  public async removeComment(
    @Param("commentId") commentId: string
  ): Promise<any> {
    return this.service.removeComment(commentId);
  }
}
