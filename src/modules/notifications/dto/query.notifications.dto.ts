import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/modules/common/pagination/pagination.args';

@ArgsType()
export class QueryContractsDto extends PaginationArgs {
  @Field({ nullable: true })
  keywords?: string;
}
