import {
  Field,
  InputType,
  ID,
  GraphQLISODateTime,
  Int,
  Float,
} from '@nestjs/graphql';
@InputType('OrderInput')
export class OrderInput {
  @Field((returns) => ID)
  customer: string;
  @Field((returns) => [OrderItemInput])
  items: OrderItemInput[];
  @Field((returns) => GraphQLISODateTime, { nullable: true })
  createdAt: number;
}

@InputType('OrderItemInput')
export class OrderItemInput {
  @Field((returns) => ID)
  product: string;
  @Field((returns) => ID)
  contract: string;
  @Field((returns) => Int)
  quantity: number;
  @Field((returns) => Float)
  unit_price: number;
  @Field({ nullable: true })
  currency: string;
}
