import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@ObjectType('User')
@Schema()
export class User {
  @Field((type) => ID)
  _id: string;
  @Field((type) => String)
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
