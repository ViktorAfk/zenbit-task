import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfigService>(AppConfigService);
  const allowedOrigins = [appConfig.webUrl];

  const isDevelopment = appConfig.env === 'development';

  if (isDevelopment) {
    allowedOrigins.push('http://localhost:5173');
  }

  app.enableCors({
    credentials: true,
    origin: allowedOrigins,
  });

  await app.listen(appConfig.port);
}

bootstrap();
