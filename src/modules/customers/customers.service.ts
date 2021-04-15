import { Injectable } from '@nestjs/common';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomersService {
  private readonly customers: Array<Customer> = [];
  findCustomerById(id: string) {
    return this.customers.find((customer) => customer.id === id);
  }
  findAll() {
    return this.customers;
  }
  createCustomer(customer: Customer) {
    customer.id = this.customers.length + 1 + '';
    this.customers.push(customer);
    return customer;
  }
}
