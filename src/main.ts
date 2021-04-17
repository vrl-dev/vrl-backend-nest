import { NestFactory } from '@nestjs/core';

import { serverPort } from 'src/config/constants';

import { AppModule } from './app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort);
}
bootstrap();
