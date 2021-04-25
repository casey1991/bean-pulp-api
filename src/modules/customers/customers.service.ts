import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateResult, PaginateOptions } from 'mongoose';
import { CustomerInput } from './dto/create.customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private model: PaginateModel<CustomerDocument>,
  ) {}
  async findById(id: string): Promise<Customer> {
    return await this.model.findById(id);
  }
  async findAll(
    conditions: Object,
    options?: PaginateOptions,
  ): Promise<PaginateResult<Customer>> {
    const results = await this.model.paginate(conditions, options);
    return results;
  }
  create(data: CustomerInput) {
    const result = new this.model(data);
    return result.save();
  }
}
