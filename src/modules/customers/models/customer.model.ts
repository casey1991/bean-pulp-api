import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
}
