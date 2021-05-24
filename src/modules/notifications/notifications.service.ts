import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificationDto } from './dto/create.notification.dto';
import {
  Notification,
  NotificationDocument,
} from './schemas/notification.schema';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification.name)
    private contractModel: Model<NotificationDocument>,
  ) {}
  async findById(id: string): Promise<Notification> {
    const result = await this.contractModel.findById(id);
    return result;
  }
  async findAll(): Promise<Notification[]> {
    const results = await this.contractModel.find();
    return results;
  }
  create(notification: CreateNotificationDto) {
    const result = new this.contractModel(notification);
    return result.save();
  }
}
