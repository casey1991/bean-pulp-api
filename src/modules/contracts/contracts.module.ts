import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractsResolver } from './contracts.resolver';
import { ContactsService } from './contracts.service';
import { Contract, ContractSchema } from './schemas/contract.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contract.name, schema: ContractSchema },
    ]),
  ],
  providers: [ContactsService, ContractsResolver],
})
export class ContractsModule {}
