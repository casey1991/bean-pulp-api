import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissionsDecorator } from '../auth/decorators/permissions.decorator';
import { GqlAuthGuard } from '../auth/guards/gql.auth.guard';
import { GqlPermissionsGuard } from '../auth/guards/gql.permissions.guard';
import { Permissions } from '../common/enums/permissions.enum';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create.contract.dto';
import { QueryContractsDto } from './dto/query.contracts.dto';
import { Contract } from './schemas/contract.schema';
@Resolver((of) => Contract)
export class ContractsResolver {
  constructor(private readonly service: ContractsService) {}
  @UseGuards(GqlAuthGuard, GqlPermissionsGuard)
  @PermissionsDecorator(Permissions.CONTRACT_READ)
  @Query((returns) => Contract)
  async contract(@Args('id') id: string): Promise<Contract> {
    return this.service.findById(id);
  }
  @UseGuards(GqlAuthGuard, GqlPermissionsGuard)
  @PermissionsDecorator(Permissions.CONTRACT_READ)
  @Query((returns) => [Contract])
  async contracts(@Args() args: QueryContractsDto): Promise<Contract[]> {
    return this.service.findAll();
  }
  @UseGuards(GqlAuthGuard, GqlPermissionsGuard)
  @PermissionsDecorator(Permissions.CONTRACT_CREATE)
  @Mutation((returns) => Contract)
  async createContract(@Args('createContractInput') args: CreateContractDto) {
    return this.service.create(args);
  }
}
