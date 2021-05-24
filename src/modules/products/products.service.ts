import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';

import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private model: PaginateModel<ProductDocument>,
  ) {}
  async findById(id: string): Promise<Product> {
    const result = await this.model.findById(id);
    return result;
  }
  async findAll(
    conditions: Object,
    options?: PaginateOptions,
  ): Promise<PaginateResult<Product>> {
    const results = await this.model.paginate(conditions, options);
    return results;
  }
  async create(product: CreateProductDto): Promise<Product> {
    const result = await this.model.create(product);
    return result;
  }
  async update(product: UpdateProductDto): Promise<Product> {
    const result = await this.model.findOneAndUpdate(
      {
        _id: product._id,
      },
      {
        ...product,
      },
      { new: true },
    );
    return result;
  }
}
