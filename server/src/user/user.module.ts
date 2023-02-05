import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UserRepository } from "./user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigModule } from "@unifig/nest";
import { JwtConfig } from "../config/jwt.config";
import { TeamModule } from "../team/team.module";

@Module({
  imports: [
    ConfigModule.forFeature(JwtConfig),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    TeamModule,
  ],
  providers: [UserRepository, UserService],
  controllers: [UserController],
  exports: [UserRepository],
})
export class UserModule {}
