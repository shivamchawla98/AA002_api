import { Module } from '@nestjs/common';
import { ShippingsService } from './shippings.service';
import { ShippingsResolver } from './shippings.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Shipping } from './entities/shipping.entity';
import { Shippings, ShippingSchema } from './shippings.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Shippings.name, schema: ShippingSchema}])],
  providers: [ShippingsResolver, ShippingsService]
})
export class ShippingsModule {}