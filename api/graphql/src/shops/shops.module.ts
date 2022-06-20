import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsResolver } from './shops.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { shops_, ShopSchema } from './shop.schema';
import { Users, UserSchema } from 'src/users/user.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: shops_.name, schema: ShopSchema}]) , MongooseModule.forFeature([{name: Users.name, schema: UserSchema}])  ],

  providers: [ShopsResolver, ShopsService]
})
export class ShopsModule {}
