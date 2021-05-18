import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Vehicle')
@Schema({ _id: false })
export class Vehicle {
  @Field((type) => String)
  @Prop({ required: true })
  category: string;
  @Field((type) => String)
  @Prop({ required: true })
  number: string;
}
export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

@ObjectType('Driver')
@Schema()
export class Driver {
  @Field((type) => ID)
  _id: string;
  @Field((type) => String)
  @Prop({ required: true })
  name: string;
  @Field((type) => [String])
  @Prop({ required: true })
  phones: string[];
  @Field((type) => Vehicle)
  @Prop({ required: true })
  vehicle: Vehicle;
}
export type DriverDocument = Driver & Document;

export const DriverSchema = SchemaFactory.createForClass(Driver);
