import { Module } from "@nestjs/common";
import { ConfigModule } from "@unifig/nest";

@Module({
  imports: [
    ConfigModule.forRoot({}),
  ],
})
export class AppModule {}
