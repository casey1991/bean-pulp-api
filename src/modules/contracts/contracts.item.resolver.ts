import {
  Parent,
  ResolveField,
  Resolver,
  ResolveProperty,
} from '@nestjs/graphql';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/schemas/product.schema';

import { ContactsService } from './contracts.service';
import { Contract, ContractItem } from './schemas/contract.schema';
@Resolver((of) => ContractItem)
export class ContractsItemResolver {
  constructor(private readonly service: ProductsService) {}

  @ResolveField('product', (returns) => Product)
  async product(@Parent() item: ContractItem): Promise<Product> {
    const { product } = item;
    return this.service.findById(product.toHexString());
  }
}
