import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaginateModel,
  PaginateResult,
  PaginateOptions,
  FilterQuery,
} from 'mongoose';
import { UserInput } from './dto/create.user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private model: PaginateModel<UserDocument>,
  ) {}
  async findById(id: string): Promise<User> {
    const result = await this.model.findById(id);
    return result;
  }
  async findByIds(ids: string[]): Promise<User[]> {
    const result = await this.model.find({ _id: { $in: ids } });
    return result;
  }
  async findAll(
    conditions: Object,
    options?: PaginateOptions,
  ): Promise<PaginateResult<User>> {
    const results = await this.model.paginate(conditions, options);
    return results;
  }
  async findOne(filter: FilterQuery<UserDocument>): Promise<User> {
    const result = await this.model.findOne(filter);
    return result;
  }
  create(data: UserInput) {
    const result = new this.model(data);
    return result.save();
  }
}
