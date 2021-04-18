import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateContractDto } from './dto/create.contract.dto';
import { Contract, ContractDocument } from './schemas/contract.schema';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contract.name) private contractModel: Model<ContractDocument>,
  ) {}
  async findById(id: string): Promise<Contract> {
    const result = await this.contractModel.findById(id);
    return result;
  }
  async findAll(): Promise<Contract[]> {
    const results = await this.contractModel.find();
    return results;
  }
  create(contact: CreateContractDto) {
    const result = new this.contractModel(contact);
    return result.save();
  }
}
