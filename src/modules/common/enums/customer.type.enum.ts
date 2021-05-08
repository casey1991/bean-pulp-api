import { registerEnumType } from '@nestjs/graphql';

export enum CustomerType {
  NORMAL = 'NORMAL',
}

registerEnumType(CustomerType, {
  name: 'CustomerType',
});
