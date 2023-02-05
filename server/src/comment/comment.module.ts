import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Comment, CommentSchema } from "./comment.schema";
import { CommentRepository } from "./comment.repository";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comment.name,
        schema: CommentSchema,
      },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentRepository, CommentService],
  exports: [CommentRepository],
})
export class CommentModule {}
