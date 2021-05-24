import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { pubSubFactory } from '../common/providers/pubsub.provider';
import { NotificationsResolver } from './notifications.resolver';
import { NotificationsService } from './notifications.service';
import {
  Notification,
  NotificationSchema,
} from './schemas/notification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  providers: [NotificationsService, NotificationsResolver, pubSubFactory],
  exports: [NotificationsService, 'PUB_SUB'],
})
export class NotificationsModule {}
