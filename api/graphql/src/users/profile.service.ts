import { Injectable } from '@nestjs/common';
import {
  AuthResponse,
  ChangePasswordInput,
  finduser,
  ForgetPasswordInput,
  LoginInput,
  PasswordChangeResponse,
  RegisterInput,
  ResetPasswordInput,
  VerifyForgetPasswordTokenInput,
} from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, Permissions } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from './dto/get-user.args';
import usersJson from './users.json';
import Fuse from 'fuse.js';
import { paginate } from 'src/common/pagination/paginate';
import { plainToClass } from 'class-transformer';
import { GetUsersArgs, UserPaginator } from './dto/get-users.args';
import { MakeOrRevokeAdminInput } from './dto/make-revoke-admin.input';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Users } from './user.schema';
import { isEmail } from 'class-validator';
import { Profile } from './profile.schema';

const users = plainToClass(User, usersJson);
const options = {
  keys: ['name', 'type.slug', 'categories.slug', 'status'],
  threshold: 0.3,
};
const fuse = new Fuse(users, options);

@Injectable()
export class ProfileService {
  constructor( @InjectModel(Profile.name) private profileModel:Model<Profile>){}

  


}
