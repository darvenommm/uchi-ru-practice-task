import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ApplicationModule } from './application.module';
import { Config } from './tools/config';

const bootstrap = async (): Promise<void> => {
  const application = await NestFactory.create(ApplicationModule);

  const config = application.get(Config);

  application.enableCors({
    origin: [config.frontendOrigin],
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cats')
    .setDescription('Api for working with cats')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  SwaggerModule.setup('api', application, SwaggerModule.createDocument(application, swaggerConfig));

  await application.listen(3000);
};

bootstrap();
