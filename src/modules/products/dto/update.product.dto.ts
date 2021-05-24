import { Field, InputType, Float } from '@nestjs/graphql';
import { ProductUnit } from 'src/modules/common/enums/product.unit.enum';

@InputType('UpdateProductInput')
export class UpdateProductDto {
  @Field()
  _id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  description: string;
  @Field((type) => ProductUnit, {
    defaultValue: ProductUnit.KG,
    nullable: true,
  })
  unit: ProductUnit;
  @Field((type) => Float, { nullable: true })
  unit_weight: number;
  @Field((type) => String, { nullable: true })
  unit_label: string;
}
