import { Args, Mutation, Query, Resolver, ID } from '@nestjs/graphql';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { QueryProductDto } from './dto/query.product.dto';
import { Product } from './schemas/product.schema';
import { PaginatedProduct } from './models/paginated.product';
import { UpdateProductDto } from './dto/update.product.dto';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private readonly service: ProductsService) {}
  @Query((returns) => Product)
  async product(@Args('_id', { type: () => ID }) id: string): Promise<Product> {
    return this.service.findById(id);
  }
  @Query((returns) => PaginatedProduct)
  async products(@Args() args: QueryProductDto): Promise<PaginatedProduct> {
    let querys: Record<string, any> = {};
    if (args.name) {
      querys.$or = [{ name: { $regex: args.name } }];
    }
    const results = await this.service.findAll(querys, {
      offset: args.offset,
      limit: args.limit,
    });
    return {
      nodes: results.docs,
      totalCount: results.totalDocs,
      hasNextPage: results.hasNextPage,
      totalPages: results.totalPages,
    };
  }
  @Mutation((returns) => Product)
  async createProduct(@Args('createProductInput') args: CreateProductDto) {
    return this.service.create(args);
  }
  @Mutation((returns) => Product)
  async updateProduct(@Args('updateProductInput') args: UpdateProductDto) {
    return this.service.update(args);
  }
}
