import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsMongoId()
  authorId: string;

  @IsMongoId()
  issueId: string;
}
