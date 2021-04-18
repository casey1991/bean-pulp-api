import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { QueryProductDto } from './dto/query.product.dto';
import { Product } from './schemas/product.schema';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private readonly service: ProductsService) {}
  @Query((returns) => Product)
  async product(@Args('id') id: string): Promise<Product> {
    return this.service.findById(id);
  }
  @Query((returns) => [Product])
  async products(@Args() args: QueryProductDto): Promise<Product[]> {
    return this.service.findAll();
  }
  @Mutation((returns) => Product)
  async createProduct(@Args('createProductInput') args: CreateProductDto) {
    return this.service.create(args);
  }
}
