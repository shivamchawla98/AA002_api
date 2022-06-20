import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver, VariationResolver } from './products.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductSchema } from './product.schema';
import { Types, TypeSchema } from 'src/types/types.schema';
import { CategoriesSchema, Categories_ } from 'src/categories/categories.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Products.name, schema: ProductSchema}]), MongooseModule.forFeature([{name: Types.name, schema: TypeSchema}]),MongooseModule.forFeature([{name: Categories_.name, schema: CategoriesSchema}]) ],
  providers: [ProductsResolver, ProductsService, VariationResolver],
})
export class ProductsModule {}
