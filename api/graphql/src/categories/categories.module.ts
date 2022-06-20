import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesSchema, Categories_ } from './categories.schema';
import { Types, TypeSchema } from 'src/types/types.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Categories_.name, schema: CategoriesSchema}]) , MongooseModule.forFeature([{name: Types.name, schema: TypeSchema}]) ],
  
  providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
