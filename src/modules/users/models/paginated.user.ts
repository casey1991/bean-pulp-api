import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/modules/common/pagination/paginated';
import { User } from '../schemas/user.schema';

@ObjectType()
export class PaginatedUser extends Paginated(User) {}
