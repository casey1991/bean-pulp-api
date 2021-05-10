import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateResult, PaginateOptions } from 'mongoose';
import { RegionInput } from './dto/create.region.dto';
import { Region, RegionDocument } from './schemas/region.schema';

@Injectable()
export class RegionsService {
  constructor(
    @InjectModel(Region.name) private model: PaginateModel<RegionDocument>,
  ) {}
  async findById(id: string): Promise<Region> {
    const result = await this.model.findById(id);
    return result;
  }
  async findByIds(ids: string[]): Promise<Region[]> {
    const result = await this.model.find({ _id: { $in: ids } });
    return result;
  }
  async findAll(
    conditions: Object,
    options?: PaginateOptions,
  ): Promise<PaginateResult<Region>> {
    const results = await this.model.paginate(conditions, options);
    return results;
  }
  create(data: RegionInput) {
    const result = new this.model(data);
    return result.save();
  }
}
