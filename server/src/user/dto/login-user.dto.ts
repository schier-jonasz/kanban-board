import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
