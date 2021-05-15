import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Currency } from 'src/modules/common/enums/currency.enum';
import { Product } from 'src/modules/products/schemas/product.schema';
export type ContractDocument = Contract & Document;

@ObjectType('ContractItem')
@Schema({ _id: false })
export class ContractItem {
  @Field((type) => Int)
  @Prop({ required: true, default: 1 })
  quantity: number;
  @Field((type) => Int)
  @Prop({ required: true, default: 0 })
  remain: number;

  @Field((type) => Product)
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Product', required: true })
  product: ObjectId;

  @Field((type) => Int)
  @Prop({ required: true })
  unit_price: number;

  @Field((type) => Currency)
  @Prop({ default: Currency.CNY })
  currency: string;
}
export const ContractItemSchema = SchemaFactory.createForClass(ContractItem);

@ObjectType('Contract')
@Schema()
export class Contract {
  @Field((type) => ID)
  _id: ObjectId;

  @Field((type) => String)
  @Prop({ required: true })
  number: string;

  @Field((type) => [ContractItem])
  @Prop({ type: [ContractItemSchema] })
  items: ContractItem[];
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
