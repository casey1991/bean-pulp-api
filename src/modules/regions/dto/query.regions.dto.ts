import { ArgsType, Field, ID } from '@nestjs/graphql';
import { PaginationArgs } from 'src/modules/common/pagination/pagination.args';

@ArgsType()
export class QueryRegionsDto extends PaginationArgs {
  @Field({ nullable: true })
  keywords?: RegExp;
  @Field((type) => ID, { nullable: true })
  parent?: string;
}
