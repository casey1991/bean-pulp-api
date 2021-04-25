import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/modules/common/pagination/pagination.args';

@ArgsType()
export class QueryCustomerDto extends PaginationArgs {
  @Field({ nullable: true })
  keywords?: RegExp;
}
