import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { DriversService } from './drivers.service';
import { DriverInput } from './dto/create.driver.dto';
import { QueryDriversDto } from './dto/query.drivers.dto';
import { PaginatedDriver } from './models/paginated.driver';
import { Driver } from './schemas/driver.schema';
import { GqlAuthGuard } from '../auth/guards/gql.auth.guard';
import { CurrentUser } from '../auth/decorators/currentuser.decorator';

@Resolver((of) => Driver)
export class DriversResolver {
  constructor(private readonly service: DriversService) {}
  @Query((returns) => Driver)
  async driver(@Args('id') id: string): Promise<Driver> {
    return this.service.findById(id);
  }
  @Query((returns) => PaginatedDriver)
  async drivers(@Args() args: QueryDriversDto): Promise<PaginatedDriver> {
    let querys: Record<string, any> = {};
    if (args.name) {
      querys.$or = [{ name: { $regex: args.name } }];
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
  @Mutation((returns) => Driver)
  async createDriver(@Args('driverInput') args: DriverInput) {
    return this.service.create(args);
  }
}
