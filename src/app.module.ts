import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CommonModule } from './modules/common/common.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { CustomersModule } from './modules/customers/customers.module';
import { ProductsModule } from './modules/products/products.module';
import { RegionsModule } from './modules/regions/regions.module';
import { SeederModule } from './modules/seeder/seeder.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bean-pulp'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    CommonModule,
    ContractsModule,
    CustomersModule,
    ProductsModule,
    RegionsModule,
    SeederModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
