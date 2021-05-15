import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaginateModel,
  PaginateResult,
  PaginateOptions,
  FilterQuery,
} from 'mongoose';

import { OrderInput } from './dto/create.order.dto';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private model: PaginateModel<OrderDocument>,
  ) {}
  async findById(id: string): Promise<Order> {
    const result = await this.model.findById(id);
    return result;
  }
  async findByIds(ids: string[]): Promise<Order[]> {
    const result = await this.model.find({ _id: { $in: ids } });
    return result;
  }
  async findAll(
    conditions: Object,
    options?: PaginateOptions,
  ): Promise<PaginateResult<Order>> {
    const results = await this.model.paginate(conditions, options);
    return results;
  }
  async findOne(filter: FilterQuery<OrderDocument>): Promise<Order> {
    const result = await this.model.findOne(filter);
    return result;
  }
  create(data: OrderInput) {
    const result = new this.model(data);
    return result.save();
  }
}
