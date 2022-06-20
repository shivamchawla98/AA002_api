import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesResolver } from './types.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Types, TypeSchema } from './types.schema';
import { CategoriesSchema, Categories_ } from 'src/categories/categories.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Categories_.name, schema: CategoriesSchema}]), MongooseModule.forFeature([{name: Types.name, schema: TypeSchema}])],
  providers: [TypesResolver, TypesService]
})
export class TypesModule {}
