import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {ConfigService} from "@nestjs/config";

import { AppModule } from './app.module';
import {IConfiguration} from "./interfaces";
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });

  app.enableCors({ origin:'*'} );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Test example')
    .setDescription('The test API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService = app.get<IConfiguration>(ConfigService);
  const port = configService.get('port');

  await app.listen(port, () =>
      console.log(`Server is running on PORT:${port}`),
  );
}
bootstrap();
