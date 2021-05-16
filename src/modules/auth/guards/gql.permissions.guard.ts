import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Permissions } from 'src/modules/common/enums/permissions.enum';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlPermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const permissions = this.reflector.getAllAndOverride<Permissions[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    const ctx = GqlExecutionContext.create(context);
    const { user } = ctx.getContext().req;
    return permissions.some((permission) =>
      user.permissions?.includes(permission),
    );
  }
}
