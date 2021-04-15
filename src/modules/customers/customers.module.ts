import { Module } from '@nestjs/common';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';

@Module({
  imports: [],
  providers: [CustomersService, CustomersResolver],
})
export class CustomersModule {}
