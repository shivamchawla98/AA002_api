import { Module } from '@nestjs/common';
import { ImportsService } from './imports.service';
import { ImportsResolver } from './imports.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductSchema } from 'src/products/product.schema';
import { Types, TypeSchema } from 'src/types/types.schema';
import { CategoriesSchema, Categories_ } from 'src/categories/categories.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Products.name, schema: ProductSchema}]), MongooseModule.forFeature([{name: Types.name, schema: TypeSchema}]),MongooseModule.forFeature([{name: Categories_.name, schema: CategoriesSchema}]) ],
  providers: [ImportsResolver, ImportsService]
})
export class ImportsModule {}
