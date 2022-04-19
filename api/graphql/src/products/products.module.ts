import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver, VariationResolver } from './products.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductSchema } from './product.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Products.name, schema: ProductSchema}])],
  providers: [ProductsResolver, ProductsService, VariationResolver],
})
export class ProductsModule {}
