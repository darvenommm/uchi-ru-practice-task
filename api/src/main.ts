import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './application.module';

const bootstrap = async (): Promise<void> => {
  const application = await NestFactory.create(ApplicationModule);

  application.enableCors({
    origin: ['http://localhost:8080', 'http://0.0.0.0:8080'],
  });

  await application.listen(3000);
};

bootstrap();
