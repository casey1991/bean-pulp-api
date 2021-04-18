import { registerEnumType } from '@nestjs/graphql';

export enum Currency {
  CNY = 'CNY',
}

registerEnumType(Currency, {
  name: 'Currency',
});
