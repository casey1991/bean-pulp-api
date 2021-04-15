import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create.customer.dto';
import { CustomerEntity } from './entities/customer.entity';
import { CustomerRepository } from './repositories/customer.repository';

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepository: CustomerRepository) {}
  async findCustomerById(id: string): Promise<CustomerEntity> {
    return await this.customerRepository.findOne({
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<CustomerEntity[]> {
    const results = await this.customerRepository.find();
    return results;
  }
  createCustomer(customer: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create(customer);
    return this.customerRepository.save({ ...newCustomer });
  }
}
