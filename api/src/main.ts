// Use npm run start:dev to run NestJS server.
// Once NestJS server is running use http://{host}:8000/api to access API documentation

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validators for body parameters
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignore body parameters not in DTOs
    }),
  );

  // COnfigure swagger
  const config = new DocumentBuilder()
    .setTitle('Bingr')
    .setDescription('Bingr API documentation')
    .setVersion('1.0')
    .addTag('bingr')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
