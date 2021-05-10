import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/modules/common/pagination/paginated';
import { Region } from '../schemas/region.schema';

@ObjectType()
export class PaginatedRegion extends Paginated(Region) {}
