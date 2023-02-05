import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Config } from "@unifig/core";
import { ConfigModule } from "@unifig/nest";
import { MongoConfig } from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(Config.getValues(MongoConfig).url, {
      useNewUrlParser: true,
      autoIndex: false,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}
