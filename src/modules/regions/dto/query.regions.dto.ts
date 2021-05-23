import { ArgsType, Field, ID } from '@nestjs/graphql';
import { RegionLevel } from 'src/modules/common/enums/region.level.enum';
import { PaginationArgs } from 'src/modules/common/pagination/pagination.args';

@ArgsType()
export class QueryRegionsDto extends PaginationArgs {
  @Field({ nullable: true })
  keywords?: RegExp;
  @Field((type) => RegionLevel, { nullable: true })
  level?: RegionLevel;
  @Field((type) => ID, { nullable: true })
  parent?: string;
}
