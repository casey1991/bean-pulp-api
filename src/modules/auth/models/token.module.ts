import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType('Token')
export class Token {
  @Field((type) => String)
  access_token: string;
}
