import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCustomerDto } from './dto/create.customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private model: Model<CustomerDocument>,
  ) {}
  async findById(id: string): Promise<Customer> {
    return await this.model.findById(id);
  }
  async findAll(): Promise<Customer[]> {
    const results = await this.model.find();
    return results;
  }
  create(data: CreateCustomerDto) {
    const result = new this.model(data);
    return result.save();
  }
}
