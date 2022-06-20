import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Users, UserSchema } from './user.schema';
import { Profile, ProfileSchema } from './profile.schema';
import { ProfileService } from './profile.service';


@Module({
  imports : [MongooseModule.forFeature([{name: Profile.name, schema: ProfileSchema}])],
  providers: [UsersResolver, ProfileService],
})
export class ProfileModule {}
