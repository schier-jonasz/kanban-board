import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Config } from "@unifig/core";
import { ConfigModule } from "@unifig/nest";
import { UserModule } from "./user/user.module";
import { MongoConfig } from "./config";
import { TeamModule } from "./team/team.module";
import { CommentModule } from "./comment/comment.module";
import { IssueModule } from "./issue/issue.module";

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(Config.getValues(MongoConfig).url, {
      useNewUrlParser: true,
      autoIndex: false,
      useUnifiedTopology: true,
    }),
    CommentModule,
    IssueModule,
    TeamModule,
    UserModule,
  ],
})
export class AppModule {}
