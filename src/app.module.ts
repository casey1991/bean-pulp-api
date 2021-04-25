import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ContractsModule } from './modules/contracts/contracts.module';
import { CustomersModule } from './modules/customers/customers.module';
import { ProductsModule } from './modules/products/products.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forRoot('mongodb://localhost/bean-pulp'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    CustomersModule,
    ProductsModule,
    ContractsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
