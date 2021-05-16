import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Permissions } from 'src/modules/common/enums/permissions.enum';
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
  @Field((type) => [String])
  @Prop({ required: true, default: [Permissions.PRODUCT_READ] })
  permissions: string[];
}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
