import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from '../products/products.module';
import { ContractsItemResolver } from './contracts.item.resolver';
import { ContractsResolver } from './contracts.resolver';
import { ContractsService } from './contracts.service';
import { Contract, ContractSchema } from './schemas/contract.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contract.name, schema: ContractSchema },
    ]),
    ProductsModule,
  ],
  providers: [ContractsService, ContractsResolver, ContractsItemResolver],
  exports: [ContractsService],
})
export class ContractsModule {}
