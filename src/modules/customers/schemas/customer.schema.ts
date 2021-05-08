import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CustomerType } from 'src/modules/common/enums/customer.type.enum';

export type CustomerDocument = Customer & Document;

@ObjectType('Location')
@Schema({ _id: false })
export class Location {
  @Field((type) => String)
  @Prop({ required: true })
  province: string;

  @Field((type) => String)
  @Prop({ required: true })
  city: string;

  @Field((type) => String)
  @Prop({ required: true })
  district: string;

  @Field((type) => String, { nullable: true })
  @Prop({ required: false })
  street: string;
}
export const LocationSchema = SchemaFactory.createForClass(Location);

@ObjectType('Customer')
@Schema()
export class Customer {
  @Field((type) => ID)
  _id: string;

  @Field((type) => String)
  @Prop({ required: true })
  name: string;

  @Field((type) => [String])
  @Prop({ required: true })
  phones: string[];

  @Field((type) => Location, { nullable: true })
  @Prop({ type: LocationSchema, required: false })
  location: Location;

  @Field((type) => CustomerType)
  @Prop({ required: true, default: CustomerType.NORMAL })
  type: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
