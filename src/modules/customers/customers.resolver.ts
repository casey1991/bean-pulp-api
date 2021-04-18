import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create.customer.dto';
import { QueryCustomerDto } from './dto/query.customers.dto';
import { Customer } from './schemas/customer.schema';

@Resolver((of) => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}
  @Query((returns) => Customer)
  async customer(@Args('id') id: string): Promise<Customer> {
    return this.customersService.findById(id);
  }
  @Query((returns) => [Customer])
  async customers(@Args() args: QueryCustomerDto): Promise<Customer[]> {
    return this.customersService.findAll();
  }
  @Mutation((returns) => Customer)
  async createCustomer(@Args('createCustomerInput') args: CreateCustomerDto) {
    return this.customersService.create(args);
  }
}
