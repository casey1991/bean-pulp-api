import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateContractInput')
export class CreateContractDto {
  @Field()
  number: string;
  @Field((type) => [CreateContractItemDto])
  items: CreateContractItemDto[];
}

@InputType('CreateContractItemInput')
export class CreateContractItemDto {
  @Field({ nullable: true })
  qty: number;
  @Field()
  product: string;
  @Field()
  unit_price: number;
  @Field({ nullable: true })
  currency: string;
}
