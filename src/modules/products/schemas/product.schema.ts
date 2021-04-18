import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProductUnit } from 'src/modules/common/enums/product.unit.enum';

export type ProductDocument = Product & Document;

@ObjectType('Product')
@Schema()
export class Product {
  @Field((type) => ID)
  _id: string;

  @Field((type) => String)
  @Prop({ required: true })
  name: string;

  @Field((type) => ProductUnit)
  @Prop({ default: ProductUnit.KG, required: true })
  unit: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
