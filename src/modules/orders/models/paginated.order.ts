import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/modules/common/pagination/paginated';
import { Order } from '../schemas/order.schema';

@ObjectType()
export class PaginatedOrder extends Paginated(Order) {}
