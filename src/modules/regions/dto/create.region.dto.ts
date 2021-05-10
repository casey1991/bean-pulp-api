import { Field, Float, ID, InputType } from '@nestjs/graphql';
import { RegionLevel } from 'src/modules/common/enums/region.level.enum';
@InputType('CenterInput')
export class CenterInput {
  @Field((type) => Float)
  latitude: number;
  @Field((type) => Float)
  longitude: number;
}

@InputType('RegionInput')
export class RegionInput {
  @Field()
  _id: string;
  @Field()
  name: string;
  @Field((type) => CenterInput)
  center: CenterInput;
  @Field((type) => RegionLevel)
  level: RegionLevel;
  @Field((type) => [ID])
  children: string[];
  @Field((type) => ID, { nullable: true })
  parent: string;
}
