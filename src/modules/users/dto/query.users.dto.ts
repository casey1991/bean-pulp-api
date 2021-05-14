import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/modules/common/pagination/pagination.args';

@ArgsType()
export class QueryUsersDto extends PaginationArgs {
  @Field({ nullable: true })
  username?: RegExp;
}
