import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto } from './dto/create.product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private model: Model<ProductDocument>,
  ) {}
  async findById(id: string): Promise<Product> {
    const result = await this.model.findById(id);
    return result;
  }
  async findAll(): Promise<Product[]> {
    const results = await this.model.find();
    return results;
  }
  async create(product: CreateProductDto): Promise<Product> {
    const result = await this.model.create(product);
    return result;
  }
}
