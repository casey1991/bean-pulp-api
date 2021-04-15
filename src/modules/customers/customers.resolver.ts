import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CustomersService } from './customers.service';
import { CreateCustomerInput } from './dto/create.customer.input';
import { Customer } from './models/customer.model';

@Resolver((of) => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}
  @Query((returns) => Customer)
  async customer(@Args('id') id: string): Promise<Customer> {
    return this.customersService.findCustomerById(id);
  }
  @Query((returns) => [Customer])
  async customers(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
  @Mutation((returns) => Customer)
  async createCustomer(@Args('createCustomerInput') args: CreateCustomerInput) {
    const createdCustomer = await this.customersService.createCustomer({
      id: '',
      ...args,
    });
    return createdCustomer;
  }
}
