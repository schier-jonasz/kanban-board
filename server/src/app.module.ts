import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Config } from "@unifig/core";
import { ConfigModule } from "@unifig/nest";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(Config.getValues(MongoConfig).url, {
      useNewUrlParser: true,
      autoIndex: false,
      useUnifiedTopology: true,
    }),
    TeamModule,
    UserModule,
  ],
})
export class AppModule {}
