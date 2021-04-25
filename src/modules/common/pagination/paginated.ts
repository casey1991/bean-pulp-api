import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field((type) => [classRef], { nullable: true })
    nodes: T[];
    @Field((type) => Int)
    totalCount: number;
    @Field()
    hasNextPage: boolean;
    @Field((type) => Int)
    totalPages: number;
  }
  return PaginatedType;
}
