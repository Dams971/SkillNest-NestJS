import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './core/pipes/validation.pipe';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { ExceptionFilter } from './core/filters/exception.filter';
import { LoggerService } from './core/services/logger.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const logger = app.get(LoggerService);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor(logger));
  app.useGlobalFilters(new ExceptionFilter(logger));

  app.enableCors({
    origin: configService.get('cors.origin'),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  const port = configService.get('port');
  await app.listen(port);
  
  logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();