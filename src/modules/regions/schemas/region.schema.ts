import { Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RegionLevel } from 'src/modules/common/enums/region.level.enum';
@ObjectType('Coordinates')
@Schema({ id: false })
export class Coordinates {
  @Field((type) => Float)
  @Prop({ required: true })
  latitude: number;

  @Field((type) => Float)
  @Prop({ required: true })
  longitude: number;
}
export type CoordinatesDocument = Coordinates & Document;

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);

@ObjectType('Region')
@Schema()
export class Region {
  @Field((type) => ID)
  @Prop()
  _id: string;
  @Field((type) => String)
  @Prop({ required: true })
  name: string;
  @Field((type) => Coordinates, { nullable: true })
  center: Coordinates;
  @Field((type) => RegionLevel)
  @Prop({ required: true, default: RegionLevel.PROVINCE })
  level: string;
  @Field((type) => [ID])
  @Prop({ default: [String] })
  children: string[];
  @Field((type) => ID, { nullable: true })
  @Prop()
  parent: string;
}
export type RegionDocument = Region & Document;

export const RegionSchema = SchemaFactory.createForClass(Region);
