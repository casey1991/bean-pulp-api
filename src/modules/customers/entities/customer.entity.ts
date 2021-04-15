import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Customer')
@ObjectType('Customer')
export class CustomerEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: number;
  @Field()
  @Column()
  name: string;
}
