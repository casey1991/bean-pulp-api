import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { CustomerRepository } from './repositories/customer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerRepository])],
  providers: [CustomersService, CustomersResolver],
})
export class CustomersModule {}
