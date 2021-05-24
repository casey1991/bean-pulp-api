import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { ObjectId } from 'mongodb';
@ObjectType('Notification')
@Schema()
export class Notification {
  @Field((type) => ID)
  _id: ObjectId;
  @Field((type) => String)
  @Prop({ required: true })
  title: string;
  @Field((type) => String)
  @Prop({ required: true })
  body: string;
  @Field((type) => [ID!]!)
  @Prop({ required: true, type: [{ type: SchemaTypes.ObjectId, ref: 'User' }] })
  to: string[];
}
export type NotificationDocument = Document & Notification;
export const NotificationSchema = SchemaFactory.createForClass(Notification);
