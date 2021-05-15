import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { OrdersService } from './orders.service';
import { QueryOrdersDto } from './dto/query.orders.dto';
import { PaginatedOrder } from './models/paginated.order';
import { Order } from './schemas/order.schema';
import { OrderInput } from './dto/create.order.dto';
import { Customer } from '../customers/schemas/customer.schema';
import { CustomersService } from '../customers/customers.service';
@Resolver((of) => Order)
export class OrdersResolver {
  constructor(
    private readonly service: OrdersService,
    private readonly customers: CustomersService,
  ) {}
  @Query((returns) => Order)
  async order(@Args('id') id: string): Promise<Order> {
    return this.service.findById(id);
  }
  @Query((returns) => PaginatedOrder)
  async orders(@Args() args: QueryOrdersDto): Promise<PaginatedOrder> {
    let querys: Record<string, any> = {};
    if (args.username) {
      querys.$or = [{ name: { $regex: args.username } }];
    }
    const results = await this.service.findAll(querys, {
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
  @ResolveField((returns) => Customer)
  async customer(@Parent() parent: Order) {
    const { customer } = parent;
    return this.customers.findById(customer.toHexString());
  }
  @Mutation((returns) => Order)
  async createOrder(@Args('orderInput') args: OrderInput): Promise<Order> {
    return this.service.create(args);
  }
}
