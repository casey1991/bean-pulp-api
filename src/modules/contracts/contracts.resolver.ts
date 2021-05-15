import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create.contract.dto';
import { QueryContractsDto } from './dto/query.contracts.dto';
import { Contract, ContractItem } from './schemas/contract.schema';
@Resolver((of) => Contract)
export class ContractsResolver {
  constructor(private readonly service: ContractsService) {}
  @Query((returns) => Contract)
  async contract(@Args('id') id: string): Promise<Contract> {
    return this.service.findById(id);
  }
  @Query((returns) => [Contract])
  async contracts(@Args() args: QueryContractsDto): Promise<Contract[]> {
    return this.service.findAll();
  }
  @Mutation((returns) => Contract)
  async createContract(@Args('createContractInput') args: CreateContractDto) {
    return this.service.create(args);
  }
}
