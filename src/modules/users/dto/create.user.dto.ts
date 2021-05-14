import { Field, InputType } from '@nestjs/graphql';
@InputType('UserInput')
export class UserInput {
  @Field()
  username: string;
}
