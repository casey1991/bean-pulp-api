import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('RegExp', (type) => RegExp)
export class RegularExpressionScalar implements CustomScalar<string, RegExp> {
  description = 'Regular Expression custom scalar type';

  parseValue(value: string): RegExp {
    const result = new RegExp(value); // from client
    return result;
  }

  serialize(value: RegExp): string {
    const result = value.source.toString();
    return result;
  }

  parseLiteral(ast: ValueNode): RegExp {
    if (ast.kind === Kind.STRING) {
      return new RegExp(ast.value);
    }
    return null;
  }
}
