import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CustomersService } from './customers.service';
import { CustomerInput } from './dto/create.customer.dto';
import { QueryCustomerDto } from './dto/query.customers.dto';
import { PaginatedCustomer } from './models/paginated.customer';
import { Customer } from './schemas/customer.schema';

@Resolver((of) => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}
  @Query((returns) => Customer)
  async customer(@Args('id') id: string): Promise<Customer> {
    return this.customersService.findById(id);
  }
  @Query((returns) => PaginatedCustomer)
  async customers(@Args() args: QueryCustomerDto): Promise<PaginatedCustomer> {
    let querys: Record<string, any> = {};
    if (args.keywords) {
      querys.$or = [
        { name: { $regex: args.keywords } },
        { phones: { $in: args.keywords } },
        { 'location.province': { $regex: args.keywords } },
        { 'location.city': { $regex: args.keywords } },
        { 'location.district': { $regex: args.keywords } },
        { 'location.street': { $regex: args.keywords } },
      ];
    }
    const results = await this.customersService.findAll(querys, {
      offset: args.offset,
      limit: args.limit,
    });
    return {
      nodes: results.docs,
      totalCount: results.totalDocs,
      hasNextPage: results.hasNextPage,
      totalPages: results.totalPages,
    };
  }

  @Mutation((returns) => Customer)
  async createCustomer(@Args('customerInput') args: CustomerInput) {
    return this.customersService.create(args);
  }
}
