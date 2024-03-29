import { NestFactory } from "@nestjs/core";
import { MongoConfig } from "./config";
import { Config, PlainConfigAdapter } from "@unifig/core";
import * as config from "config";
import { toTable } from "@unifig/validation-presenter-table";
import { JwtConfig } from "./config/jwt.config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const validationError = await Config.register({
    templates: [MongoConfig, JwtConfig],
    adapter: new PlainConfigAdapter(config as Record<string, any>),
  });
  if (validationError) {
    console.error(toTable(validationError));
    process.exit(1);
  }

  const { AppModule } = await import("./app.module");

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
