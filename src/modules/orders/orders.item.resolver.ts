import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { OrderItem } from './schemas/order.schema';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/schemas/product.schema';
import { Contract } from '../contracts/schemas/contract.schema';
import { ContractsService } from '../contracts/contracts.service';
@Resolver((of) => OrderItem)
export class OrdersItemResolver {
  constructor(
    private readonly products: ProductsService,
    private readonly contracts: ContractsService,
  ) {}
  @ResolveField('product', (returns) => Product)
  async customer(@Parent() parent: OrderItem): Promise<Product> {
    const { product } = parent;
    return this.products.findById(product.toHexString());
  }
  @ResolveField('contract', (returns) => Contract)
  async contract(@Parent() parent: OrderItem) {
    const { contract } = parent;
    return this.contracts.findById(contract.toHexString());
  }
}
