import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create.customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Resolver((of) => CustomerEntity)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}
  @Query((returns) => CustomerEntity)
  async customer(@Args('id') id: string): Promise<CustomerEntity> {
    return this.customersService.findCustomerById(id);
  }
  @Query((returns) => [CustomerEntity])
  async customers(): Promise<CustomerEntity[]> {
    return this.customersService.findAll();
  }
  @Mutation((returns) => CustomerEntity)
  async createCustomer(@Args('createCustomerInput') args: CreateCustomerDto) {
    return this.customersService.createCustomer(args);
  }
}
