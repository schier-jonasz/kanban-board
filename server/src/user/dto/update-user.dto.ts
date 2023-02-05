import { TeamRole, UserRole } from "../user.schema";
import { IsEnum, IsMongoId, IsOptional, ValidateIf } from "class-validator";

export class UpdateUserDto {
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
