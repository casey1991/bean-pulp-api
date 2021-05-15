import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/schemas/product.schema';

import { ContractItem } from './schemas/contract.schema';
@Resolver((of) => ContractItem)
export class ContractsItemResolver {
  constructor(private readonly service: ProductsService) {}

  @ResolveField('product', (returns) => Product)
  async product(@Parent() item: ContractItem): Promise<Product> {
    const { product } = item;
    return this.service.findById(product.toHexString());
  }
}
