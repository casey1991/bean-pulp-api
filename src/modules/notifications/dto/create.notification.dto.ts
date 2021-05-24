import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('CreateNotificationInput')
export class CreateNotificationDto {
  @Field()
  title: string;
  @Field()
  body: string;
  @Field((type) => [ID!]!)
  to: string[];
}
