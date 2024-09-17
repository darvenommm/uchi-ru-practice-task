import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './application.module';
import { Config } from './tools/config';

const bootstrap = async (): Promise<void> => {
  const application = await NestFactory.create(ApplicationModule);

  const config = application.get(Config);

  application.enableCors({
    origin: [config.frontendOrigin],
  });

  await application.listen(3000);
};

bootstrap();
