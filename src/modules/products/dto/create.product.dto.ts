import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateProductInput')
export class CreateProductDto {
  @Field()
  name: string;
}
