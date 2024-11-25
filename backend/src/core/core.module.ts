import { Module, Global } from '@nestjs/common';
import { LoggerService } from './services/logger.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ExceptionFilter } from './filters/exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ValidationPipe } from './pipes/validation.pipe';

@Global()
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
  ],
  providers: [
    LoggerService,
    ExceptionFilter,
    LoggingInterceptor,
    ValidationPipe,
  ],
  exports: [
    LoggerService,
    ConfigModule,
    DatabaseModule,
  ],
})
export class CoreModule {}