import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/modules/common/pagination/paginated';
import { Driver } from '../schemas/driver.schema';

@ObjectType()
export class PaginatedDriver extends Paginated(Driver) {}
