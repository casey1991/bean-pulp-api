import { Field, InputType } from '@nestjs/graphql';
@InputType('VehicleInput')
export class VehicleInput {
  @Field((type) => String)
  category: string;
  @Field((type) => String)
  number: string;
}
@InputType('DriverInput')
export class DriverInput {
  @Field()
  name: string;
  @Field((type) => [String])
  phones: string[];
  @Field((type) => VehicleInput)
  vehicle: VehicleInput;
}
