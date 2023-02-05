import { From } from "@unifig/core";
import { IsNotEmpty, IsString } from "class-validator";

export class JwtConfig {
  @IsString()
  @IsNotEmpty()
  @From("jwt.secret")
  public readonly secret: string;
}
