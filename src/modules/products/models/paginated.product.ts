import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/modules/common/pagination/paginated';
import { Product } from '../schemas/product.schema';

@ObjectType()
export class PaginatedProduct extends Paginated(Product) {}
