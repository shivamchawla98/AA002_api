import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Users, UserSchema } from './user.schema';


@Module({
  imports : [MongooseModule.forFeature([{name: Users.name, schema: UserSchema}])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
