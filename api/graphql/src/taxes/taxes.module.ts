import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesResolver } from './taxes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TAXES, TAXSESchema } from './tax.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: TAXES.name, schema: TAXSESchema}])],
  providers: [TaxesResolver, TaxesService]
})
export class TaxesModule {}
