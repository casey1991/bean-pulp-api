import { registerEnumType } from '@nestjs/graphql';

export enum ProductUnit {
  T = 'T',
  K = 'K',
  KG = 'KG',
  L = 'L',
  ML = 'ML',
}

registerEnumType(ProductUnit, {
  name: 'ProductUnit',
});
