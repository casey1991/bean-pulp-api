import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserInput } from './dto/create.user.dto';
import { QueryUsersDto } from './dto/query.users.dto';
import { PaginatedUser } from './models/paginated.user';
import { User } from './schemas/user.schema';
import { GqlAuthGuard } from '../auth/guards/gql.auth.guard';
import { CurrentUser } from '../auth/decorators/currentuser.decorator';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly service: UsersService) {}
  @Query((returns) => User)
  async user(@Args('id') id: string): Promise<User> {
    return this.service.findById(id);
  }
  @Query((returns) => PaginatedUser)
  async users(@Args() args: QueryUsersDto): Promise<PaginatedUser> {
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
  @UseGuards(GqlAuthGuard)
  @Query((returns) => User)
  async currentUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
  @Mutation((returns) => User)
  async createUser(@Args('userInput') args: UserInput) {
    return this.service.create(args);
  }
}
