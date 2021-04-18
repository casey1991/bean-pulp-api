import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { Customer, CustomerSchema } from './schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [CustomersService, CustomersResolver],
})
export class CustomersModule {}
