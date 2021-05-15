import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractsModule } from '../contracts/contracts.module';
import { CustomersModule } from '../customers/customers.module';
import { ProductsModule } from '../products/products.module';
import { OrdersItemResolver } from './orders.item.resolver';

import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Order.name,
        useFactory: () => {
          const schema = OrderSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        },
      },
    ]),
    CustomersModule,
    ProductsModule,
    ContractsModule,
  ],
  providers: [OrdersService, OrdersResolver, OrdersItemResolver],
  exports: [OrdersService],
})
export class OrdersModule {}
