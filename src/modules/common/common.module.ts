import { Module } from '@nestjs/common';
import { RegularExpressionScalar } from './scalars/regular.exception.scalar';

@Module({
  imports: [],
  providers: [RegularExpressionScalar],
})
export class CommonModule {}
