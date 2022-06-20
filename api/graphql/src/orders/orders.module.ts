import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderFileResolver, OrdersResolver } from './orders.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders_,OrderSchema } from './orders.schema';
import { Users, UserSchema } from 'src/users/user.schema';
import { Products, ProductSchema } from 'src/products/product.schema';
import { Shippings, ShippingSchema } from 'src/shippings/shippings.schema';
import { TAXES, TAXSESchema } from 'src/taxes/tax.schema';


@Module({
  imports : [MongooseModule.forFeature([{name: Orders_.name, schema: OrderSchema}]),MongooseModule.forFeature([{name: Products.name, schema: ProductSchema}]),MongooseModule.forFeature([{name: Users.name, schema: UserSchema}]),MongooseModule.forFeature([{name: TAXES.name, schema: TAXSESchema}]),MongooseModule.forFeature([{name: Shippings.name, schema: ShippingSchema}])],
  providers: [OrdersResolver, OrdersService, OrderFileResolver],
})
export class OrdersModule {}
