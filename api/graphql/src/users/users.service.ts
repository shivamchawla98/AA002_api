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
import { ProfileInput } from './dto/create-profile.input';

const users = plainToClass(User, usersJson);
const options = {
  keys: ['name', 'type.slug', 'categories.slug', 'status'],
  threshold: 0.3,
};
const fuse = new Fuse(users, options);

@Injectable()
export class UsersService {
  private users: User[] = users;
  constructor( @InjectModel(Users.name) private userModel:Model<Users> ,@InjectModel(Profile.name) private profileModel:Model<Profile>){}

  async register(createUserInput: RegisterInput): Promise<AuthResponse> {
    const user: User = {
      ...users[0],
     // id: uuidv4(),
      ...createUserInput,
      created_at: new Date(),
      updated_at: new Date(),
    };
    // console.log(user);
    const createUser = new this.userModel(user);
    createUser.save();

    this.users.push(user);
    return {
      token: 'jwt token',
      permissions: ['super_admin', 'customer'],
    };
  }

  CreateProfileRecord(profileInput: ProfileInput) {
    // console.log("######profile input #####");
    // console.log(profileInput);
    const createProfile= new this.profileModel(profileInput);
    createProfile.save();
    return profileInput;
  }

  async login(loginInput: finduser): Promise<AuthResponse> {
    // console.log(loginInput.password);
    // const userlogin = new this.userModel(loginInput);
    // console.log(this.userModel.findOne(loginInput));
    // this.userModel.findOne(loginInput);
    var email = {"email":  loginInput.email };
    var user = await this.userModel.findOne(email);
        // console.log("hello");
        // if (err) {
        //   return;
        // }
        // console.log("rahul");
        if (!user) {
          return {
            token: '',
            permissions: ['super_admin', 'store_owner', 'customer'],
          };
        }
        // console.log("ooooo");
        // var passwordIsValid = bcrypt.compareSync(
        //   loginInput.password,
        //   user.password
        // );
        // console.log("rrrr");
        if (user) {
          var passwordIsValid = (loginInput.password == user.password) ? true : false;
          // console.log(passwordIsValid);
          if (!passwordIsValid) {
            // return res.status(401).send({
            //   accessToken: null,
            //   message: "Invalid Password!"
            // });
            return {
              token: '',
              permissions: ['super_admin', 'store_owner', 'customer'],
            };
            // return;
          } else {
            return {
              token: 'jwt token',
              permissions: ['super_admin', 'store_owner', 'customer'],
            };
          }
        }
        // var token = jwt.sign({ id: user.id }, config.secret, {
        //   expiresIn: 86400 // 24 hours
        // });
        // var authorities = [];
        // for (let i = 0; i < user.roles.length; i++) {
        //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        // }
        // res.status(200).send({
        //   id: user._id,
        //   username: user.username,
        //   email: user.email,
        //   roles: authorities,
        //   accessToken: token
        // });

        // authenticated = true;

    // console.log(authenticated);
    // if (authenticated == true) {
    //   return {
    //     token: 'jwt token',
    //     permissions: ['super_admin', 'store_owner', 'customer'],
    //   }
    // } else {
    //   return {
    //     token: 'token',
    //     permissions: ['super_admin', 'store_owner', 'customer'],
    //   }
    // }
  }

  async changePassword(
    changePasswordInput: ChangePasswordInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async forgetPassword(
    forgetPasswordInput: ForgetPasswordInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async verifyForgetPasswordToken(
    verifyForgetPasswordTokenInput: VerifyForgetPasswordTokenInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async resetPassword(
    resetPasswordInput: ResetPasswordInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async getUsers({ text, first, page }: GetUsersArgs): Promise<UserPaginator> {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: User[] = await this.userModel.find();
    // if (text?.replace(/%/g, '')) {
    //   data = fuse.search(text)?.map(({ item }) => item);
    // }
    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  public async getUser(getUserArgs: GetUserArgs): Promise<User> {
    //return await this.users.find((user) => user.id === Number(getUserArgs.id));
    // console.log("get user result");
    // console.log(await this.userModel.findOne(getUserArgs));
    return await this.userModel.findOne(getUserArgs);
  }

  async me(): Promise<User> {
    console.log(await this.userModel.findById({"_id":'626eca0fd4c3ecb0f7eda827'}));
     return await this.userModel.findById({"_id":'626eca0fd4c3ecb0f7eda827'});
  }

  async updateUser(id: number, updateUserInput: UpdateUserInput) {
    // console.log("update users input");
    var UserId = {"id":  id };
    var randomID=Math.random().toString(36).slice(2);
    var test = {
      title:updateUserInput.address.upsert[0].title,
      type:"shipping",
      id:randomID,
      address:updateUserInput.address.upsert[0].address
    }
    var addressinput={
      address:[updateUserInput.address.upsert[0],test]
    }
    // console.log("@@@***@@@@****@@@@");
    // console.log(addressinput);

    var AddressValues =Object.assign(updateUserInput,addressinput);
    // console.log("###################");
    // console.log(TypeInput);
    // console.log("###################");
    // console.log(updateUserInput);
    // console.log("###################");
    var newValues = updateUserInput;
    // console.log(id);
    // console.log(updateTaxInput);
    return await this.userModel.findOneAndUpdate(UserId,newValues,{new:true})
    //return this.users[0];
  }

  async remove(id: number) {
    var UserId = {"id":  id };
    var deletedUSER = await this.userModel.findOne(UserId);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.userModel.findOneAndDelete((UserId), function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted User : ", docs);
      }
  });
 //console.log(a);
    return deletedUSER;
  }

  async makeOrRevokeAdmin({ user_id }: MakeOrRevokeAdminInput) {
    return true;
  }

  async subscribeToNewsletter(email: string) {
    return true;
  }
}
