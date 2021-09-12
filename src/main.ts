import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require("dotenv").config() // reading .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
