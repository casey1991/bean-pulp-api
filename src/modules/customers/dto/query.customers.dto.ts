import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/modules/common/pagination/pagination.args';

@ArgsType()
export class QueryCustomerDto extends PaginationArgs {
  @Field({ nullable: true })
  keywords?: RegExp;
  // @Field((type) => [RegExp], { nullable: true })
  // phones?: RegExp[];
  // @Field((type) => RegExp, { nullable: true })
  // province?: string;
  // @Field((type) => RegExp, { nullable: true })
  // city?: string;
  // @Field((type) => RegExp, { nullable: true })
  // district?: string;
  // @Field((type) => RegExp, { nullable: true })
  // street?: string;
}
