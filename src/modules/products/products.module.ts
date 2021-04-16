import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductssResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { ProductRepository } from './repositories/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  providers: [ProductsService, ProductssResolver],
})
export class ProductsModule {}
