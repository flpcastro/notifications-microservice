import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { SendNotification } from './application/use-cases/send-notification';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
  providers: [SendNotification],
})
export class AppModule {}
