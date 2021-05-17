import { registerEnumType } from '@nestjs/graphql';

export enum Permissions {
  CONTRACT_CREATE = 'CONTRACT_CREATE',
  CONTRACT_DELETE = 'CONTRACT_DELETE',
  CONTRACT_MANAGE = 'CONTRACT_MANAGE',
  CONTRACT_READ = 'CONTRACT_READ',
  CONTRACT_UPDATE = 'CONTRACT_UPDATE',
  CUSTOMER_CREATE = 'CUSTOMER_CREATE',
  CUSTOMER_DELETE = 'CUSTOMER_DELETE',
  CUSTOMER_MANAGE = 'CUSTOMER_MANAGE',
  CUSTOMER_READ = 'CUSTOMER_READ',
  CUSTOMER_UPDATE = 'CUSTOMER_UPDATE',
  ORDER_CREATE = 'ORDER_CREATE',
  ORDER_DELETE = 'ORDER_DELETE',
  ORDER_MANAGE = 'ORDER_MANAGE',
  ORDER_READ = 'ORDER_READ',
  ORDER_UPDATE = 'ORDER_UPDATE',
  PRODUCT_CREATE = 'PRODUCT_CREATE',
  PRODUCT_DELETE = 'PRODUCT_DELETE',
  PRODUCT_MANAGE = 'PRODUCT_MANAGE',
  PRODUCT_READ = 'PRODUCT_READ',
  PRODUCT_UPDATE = 'PRODUCT_UPDATE',
  USER_CREATE = 'USER_CREATE',
  USER_DELETE = 'USER_DELETE',
  USER_MANAGE = 'USER_MANAGE',
  USER_READ = 'USER_READ',
  USER_UPDATE = 'USER_UPDATE',
}

registerEnumType(Permissions, {
  name: 'Permissions',
});