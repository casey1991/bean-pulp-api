import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductUnit } from 'src/modules/common/enums/product.unit.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
@ObjectType('Product')
export class ProductEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: number;
  @Field()
  @Column()
  name: string;
  @Field((type) => ProductUnit)
  @Column({ default: ProductUnit.KG })
  unit: string;
}
