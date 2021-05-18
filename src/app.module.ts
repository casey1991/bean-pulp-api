import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

import config from './configs/config';
import { CommonModule } from './modules/common/common.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { CustomersModule } from './modules/customers/customers.module';
import { ProductsModule } from './modules/products/products.module';
import { RegionsModule } from './modules/regions/regions.module';
import { SeederModule } from './modules/seeder/seeder.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DriversModule } from './modules/drivers/drivers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MongooseModule.forRoot('mongodb://localhost/bean-pulp'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    SeederModule,
    CommonModule,
    AuthModule,
    ContractsModule,
    CustomersModule,
    DriversModule,
    OrdersModule,
    ProductsModule,
    RegionsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
