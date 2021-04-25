import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/modules/common/pagination/paginated';
import { Customer } from '../schemas/customer.schema';

@ObjectType()
export class PaginatedCustomer extends Paginated(Customer) {}
