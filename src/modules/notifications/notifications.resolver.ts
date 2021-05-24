import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { PermissionsDecorator } from '../auth/decorators/permissions.decorator';
import { GqlAuthGuard } from '../auth/guards/gql.auth.guard';
import { GqlPermissionsGuard } from '../auth/guards/gql.permissions.guard';
import { Permissions } from '../common/enums/permissions.enum';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create.notification.dto';
import { QueryContractsDto } from './dto/query.notifications.dto';
import { Notification } from './schemas/notification.schema';
@Resolver((of) => Notification)
export class NotificationsResolver {
  constructor(
    private readonly service: NotificationsService,
    @Inject('PUB_SUB') private readonly pubSub: PubSub,
  ) {}
  @UseGuards(GqlAuthGuard, GqlPermissionsGuard)
  @PermissionsDecorator(
    Permissions.NOTIFICATIONS_READ,
    Permissions.NOTIFICATIONS_MANAGE,
  )
  @Query((returns) => Notification)
  async notification(@Args('id') id: string): Promise<Notification> {
    return this.service.findById(id);
  }
  @UseGuards(GqlAuthGuard, GqlPermissionsGuard)
  @PermissionsDecorator(
    Permissions.NOTIFICATIONS_READ,
    Permissions.NOTIFICATIONS_MANAGE,
  )
  @Query((returns) => [Notification])
  async notifications(
    @Args() args: QueryContractsDto,
  ): Promise<Notification[]> {
    return this.service.findAll();
  }
  @UseGuards(GqlAuthGuard, GqlPermissionsGuard)
  @PermissionsDecorator(
    Permissions.NOTIFICATIONS_CREATE,
    Permissions.NOTIFICATIONS_MANAGE,
  )
  @Mutation((returns) => Notification)
  async createNotification(
    @Args('createNotificationInput') args: CreateNotificationDto,
  ) {
    const notification = await this.service.create(args);
    this.pubSub.publish('notificationCreated', {
      notificationCreated: notification,
    });
    return notification;
  }
  @Subscription((returns) => Notification)
  async notificationCreated() {
    return this.pubSub.asyncIterator('notificationCreated');
  }
}
