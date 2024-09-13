import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './application.module';

const bootstrap = async (): Promise<void> => {
  const application = await NestFactory.create(ApplicationModule);

  await application.listen(3000, '0.0.0.0');
};

bootstrap();
