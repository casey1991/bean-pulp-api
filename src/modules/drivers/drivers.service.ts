import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaginateModel,
  PaginateResult,
  PaginateOptions,
  FilterQuery,
} from 'mongoose';
import { DriverInput } from './dto/create.driver.dto';
import { Driver, DriverDocument } from './schemas/driver.schema';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Driver.name) private model: PaginateModel<DriverDocument>,
  ) {}
  async findById(id: string): Promise<Driver> {
    const result = await this.model.findById(id);
    return result;
  }
  async findByIds(ids: string[]): Promise<Driver[]> {
    const result = await this.model.find({ _id: { $in: ids } });
    return result;
  }
  async findAll(
    conditions: Object,
    options?: PaginateOptions,
  ): Promise<PaginateResult<Driver>> {
    const results = await this.model.paginate(conditions, options);
    return results;
  }
  async findOne(filter: FilterQuery<DriverDocument>): Promise<Driver> {
    const result = await this.model.findOne(filter);
    return result;
  }
  create(data: DriverInput) {
    const result = new this.model(data);
    return result.save();
  }
}
