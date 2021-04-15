import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateUserInput')
export class CreateCustomerDto {
  @Field()
  name: string;
}
