import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contracts.service';
import { CreateContractDto } from './dto/create.contract.dto';
import { QueryContractsDto } from './dto/query.contracts.dto';
import { Contract, ContractItem } from './schemas/contract.schema';
@Resolver((of) => Contract)
export class ContractsResolver {
  constructor(private readonly contactsService: ContactsService) {}
  @Query((returns) => Contract)
  async contract(@Args('id') id: string): Promise<Contract> {
    return this.contactsService.findById(id);
  }
  @Query((returns) => [Contract])
  async contracts(@Args() args: QueryContractsDto): Promise<Contract[]> {
    return this.contactsService.findAll();
  }
  @Mutation((returns) => Contract)
  async createContract(@Args('createContractInput') args: CreateContractDto) {
    return this.contactsService.create(args);
  }
}
