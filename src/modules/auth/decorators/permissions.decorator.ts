import { SetMetadata } from '@nestjs/common';
import { Permissions } from 'src/modules/common/enums/permissions.enum';

export const PERMISSIONS_KEY = 'Permissions';
export const PermissionsDecorator = (...permissions: Permissions[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
