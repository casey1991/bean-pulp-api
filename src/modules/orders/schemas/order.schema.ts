import {
  Field,
  ObjectType,
  ID,
  GraphQLISODateTime,
  Int,
  Float,
} from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Customer } from 'src/modules/customers/schemas/customer.schema';
import { Currency } from 'src/modules/common/enums/currency.enum';
import { Contract } from 'src/modules/contracts/schemas/contract.schema';
import { Product } from 'src/modules/products/schemas/product.schema';
@ObjectType('OrderItem')
@Schema({ _id: false })
export class OrderItem {
  @Field((type) => Product)
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Product', required: true })
  product: ObjectId;
  @Field((type) => Contract)
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Contract', required: true })
  contract: ObjectId;
  @Field((type) => Int)
  @Prop({ required: true })
  quantity: number;
  @Field((type) => Float)
  @Prop({ required: true })
  unit_price: number;
  @Field((type) => Currency)
  @Prop({ default: Currency.CNY })
  currency: string;
}
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@ObjectType('Order')
@Schema({ timestamps: true })
export class Order {
  @Field((type) => ID)
  _id: string;
  @Field((type) => Customer)
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Customer', required: true })
  customer: ObjectId;
  @Field((type) => [OrderItem])
  @Prop({ type: [OrderItemSchema], required: true })
  items: OrderItem[];
  @Field((type) => GraphQLISODateTime)
  createdAt: Date;
  @Field((type) => GraphQLISODateTime)
  updatedAt: Date;
}
export type OrderDocument = Order & Document;

export const OrderSchema = SchemaFactory.createForClass(Order);
