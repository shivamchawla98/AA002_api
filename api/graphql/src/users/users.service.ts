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
  VerifyOtpInput,
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
import { generateToken } from 'src/utils/jwt.utils';
import { GetUserArgs_token } from './dto/get-user_token.args';


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
    console.log(".................................");
    // console.log(createUserInput);

    var address1 = {
    }
    var address2 = {
    }

    var profileValues = {
      bio: "",
      contact: "",
      created_at: new Date(),
    }

    const user: User = {
      ...users[0],
     // id: uuidv4(),
      ...createUserInput,
      created_at: new Date(),
      updated_at: new Date(),
      token: generateToken(),
      profile: profileValues,
      address: [address1 , address2]
    };
    console.log(user);
    const createUser = new this.userModel(user);
    createUser.save();

    this.users.push(user);
    return {
      token: user.token,
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
    var genTok = generateToken()
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

            var UserId = email;
            var newValues = {
              token: genTok
            }

            await this.userModel.findOneAndUpdate(UserId,newValues,{new:true})

            return {
              token: genTok,
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

    var newValues = {
      password: changePasswordInput.newPassword
    }
    var IDuser = {"token":changePasswordInput.token};
    await this.userModel.findOneAndUpdate(IDuser,newValues,{new:true})
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
    let users_ = [];
    if (text && text!="%%") {
      data.forEach(element => {
        var checkTypeSlug = (element.name.toLowerCase()).includes(text.replace(/%/g, '').toLowerCase())
        if (checkTypeSlug == true) {
          users_.push(element);
        }
      });
      console.log(users_);

      // const results = users.slice(startIndex, endIndex);
      // console.log(results);
      return {
        data: users_,
        paginatorInfo: paginate(users_.length, page, first, users_.length),
      }; 
    }
    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(results.length, page, first, results.length),
    };
  }

  public async getUser(getUserArgs: GetUserArgs): Promise<User> {
    //return await this.users.find((user) => user.id === Number(getUserArgs.id));
    // console.log("get user result");
    // console.log(await this.userModel.findOne(getUserArgs));
    return await this.userModel.findOne(getUserArgs);
  }

  async me(getuserToken: GetUserArgs_token): Promise<User> {
    // console.log(await this.userModel.findOne({"token":getuserToken.token}));
    return await this.userModel.findOne({"token":getuserToken.token});
  }

  async updateUser(id: number, updateUserInput: UpdateUserInput) {
    // console.log("update users input");
    var UserId = {"id":  id };
    var userdetail = await this.userModel.findOne(UserId);
    // console.log(userdetail.address);

    if(updateUserInput.address){
      var randomID=Math.random().toString(36).slice(2);
      var newaddress = {
        title:updateUserInput.address.upsert[0].title,
        type:updateUserInput.address.upsert[0].type,
        id:randomID,
        address:updateUserInput.address.upsert[0].address
      }
  
      var addressinput = {};
      if(updateUserInput.address.upsert[0].type == "billing"){
        addressinput={
          address:[newaddress,userdetail.address[1]]
        }
      }
      
      if(updateUserInput.address.upsert[0].type == "shipping"){
        addressinput={
          address:[userdetail.address[0],newaddress]
        }
      }
      
      var newValues = addressinput;
    }
    // console.log(updateUserInput.profile);
    // console.log(updateUserInput.profile.upsert);
    if(updateUserInput.profile){
      var profileValues = {};
      if(updateUserInput.profile.upsert[0].bio){
        profileValues = {
          profile: {
            bio: updateUserInput.profile.upsert[0].bio,
            contact: userdetail.profile.contact,
            customer_id: id,
            updated_at: new Date()
          }
        }
      }
      var newValues = profileValues;
      // console.log(newValues);
    }

    
    return await this.userModel.findOneAndUpdate(UserId,newValues,{new:true})
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

  async updateNumber(verifyOtpInput: VerifyOtpInput){
    var UserId = {"token":  verifyOtpInput.token };
    var userdetail = await this.userModel.findOne(UserId);

    var profileValues = {};
    profileValues = {
      profile: {
        bio: userdetail.profile.bio,
        contact: verifyOtpInput.phone_number,
        customer_id: userdetail.id,
        updated_at: new Date()
      }
    }
    var newValues = profileValues;
    await this.userModel.findOneAndUpdate(UserId,newValues,{new:true})

    return {
      message: 'success',
      success: true,
    };
  }

}
