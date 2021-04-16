import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from './repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findProductById(id: string): Promise<ProductEntity> {
    return await this.productRepository.findOne({
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<ProductEntity[]> {
    const results = await this.productRepository.find();
    return results;
  }
  createProduct(product: CreateProductDto) {
    const newItem = this.productRepository.create(product);
    return this.productRepository.save({ ...newItem });
  }
}
