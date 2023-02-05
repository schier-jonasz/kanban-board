import { From } from "@unifig/core";
import { IsNotEmpty, IsString } from "class-validator";

export class MongoConfig {
  @IsString()
  @IsNotEmpty()
  @From("mongoUrl")
  public readonly url: string;
}
