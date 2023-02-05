import { TeamRole, UserRole } from "../user.schema";
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsEnum(UserRole)
  @IsOptional()
  public role?: UserRole;

  @IsEnum(TeamRole)
  @ValidateIf((user) => !!user.teamId)
  public teamRole?: TeamRole;

  @IsMongoId()
  @IsOptional()
  public teamId?: TeamRole;
}
