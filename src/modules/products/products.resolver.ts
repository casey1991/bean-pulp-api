import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { QueryProductDto } from './dto/query.product.dto';
import { ProductEntity } from './entities/product.entity';

@Resolver((of) => ProductEntity)
export class ProductssResolver {
  constructor(private readonly productsService: ProductsService) {}
  @Query((returns) => ProductEntity)
  async product(@Args('id') id: string): Promise<ProductEntity> {
    return this.productsService.findProductById(id);
  }
  @Query((returns) => [ProductEntity])
  async products(@Args() args: QueryProductDto): Promise<ProductEntity[]> {
    return this.productsService.findAll();
  }
  @Mutation((returns) => ProductEntity)
  async createProduct(@Args('createProductInput') args: CreateProductDto) {
    return this.productsService.createProduct(args);
  }
}
