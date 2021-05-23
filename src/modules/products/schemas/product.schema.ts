import { Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ProductUnit } from 'src/modules/common/enums/product.unit.enum';

export type ProductDocument = Product & Document;

@ObjectType('Product')
@Schema()
export class Product {
  @Field((type) => ID)
  _id: ObjectId;
  @Field((type) => String)
  @Prop({ required: true })
  name: string;
  @Field((type) => String, { nullable: true })
  @Prop({ required: false })
  description: string;
  @Field((type) => ProductUnit)
  @Prop({ default: ProductUnit.KG, required: true })
  unit: string;
  @Field((type) => Float)
  @Prop({ required: true })
  unit_weight: number;
  @Field((type) => String, { nullable: true })
  @Prop({ required: false })
  unit_label: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
