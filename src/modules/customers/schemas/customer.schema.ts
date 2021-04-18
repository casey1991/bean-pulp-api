import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@ObjectType('Customer')
@Schema()
export class Customer {
  @Field((type) => ID)
  _id: string;

  @Field((type) => String)
  @Prop({ required: true })
  name: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
