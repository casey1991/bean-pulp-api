import { Field, InputType } from '@nestjs/graphql';
import { RegionInput } from './create.region.dto';

@InputType('RegionsInput')
export class RegionsInput {
  @Field((type) => [RegionInput])
  nodes: RegionInput[];
}
