import { Field, InputType } from '@nestjs/graphql';

@InputType('LocationInput')
export class LocationInput {
  @Field()
  province: string;
  @Field((type) => String)
  city: string;
  @Field((type) => String)
  district: string;
  @Field((type) => String, { nullable: true })
  street: string;
}

@InputType('CustomerInput')
export class CustomerInput {
  @Field()
  name: string;
  @Field((type) => [String])
  phones: string[];
  @Field((type) => LocationInput, { nullable: true })
  location: LocationInput;
}
