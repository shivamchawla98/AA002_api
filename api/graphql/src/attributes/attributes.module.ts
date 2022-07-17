import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { AttributesResolver } from './attributes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AttributesSchema, Attributes_ } from './attributes.schema';

@Module({

  imports : [MongooseModule.forFeature([{name: Attributes_.name, schema: AttributesSchema}])],
  providers: [AttributesResolver, AttributesService]
})
export class AttributesModule {}
