import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = process.env.BACKEND_PORT ? parseInt(process.env.BACKEND_PORT) : 5000;

  await app.listen(port, '0.0.0.0');

  console.log(`Backend running on port ${port}`);
}
bootstrap();
