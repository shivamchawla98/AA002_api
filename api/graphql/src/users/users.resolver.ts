import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Users } from './user.schema';
import {
  AuthResponse,
  ChangePasswordInput,
  finduser,
  ForgetPasswordInput,
  LoginInput,
  OtpInput,
  OtpLoginInput,
  OtpResponse,
  PasswordChangeResponse,
  RegisterInput,
  ResetPasswordInput,
  SocialLoginInput,
  VerifyForgetPasswordTokenInput,
  VerifyOtpInput,
} from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GetUserArgs } from './dto/get-user.args';
import { GetUsersArgs, UserPaginator } from './dto/get-users.args';
import { GetUserArgs_token } from './dto/get-user_token.args';
import { SuccessResponse } from 'src/common/dto/success-response.model';
import { ProfileInput } from './dto/create-profile.input';
import { Profile } from './entities/profile.entity';
import { UpdateProfileArgs } from './dto/update-profile.args';
import { MakeOrRevokeAdminInput } from './dto/make-revoke-admin.input';
import { UserDto } from './dto/users.dto';
import { Profiledto } from './dto/profile.dto';

@Resolver(() => User)
export class UsersResolver {
  ProfileService: any;
  constructor(private readonly usersService: UsersService) {}

  // @Mutation(() => UserDto)
  // async CreateUser(@Args('input') input: UserInput){
  //   return this.usersService.create(input);
  // }

  @Mutation(() => AuthResponse)
  async register(
    @Args('input') createUserInput: RegisterInput,
  ): Promise<AuthResponse> {
    console.log("CREATE USER TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT Line 47");
    console.log(createUserInput);
    return this.usersService.register(createUserInput);
  }

  @Mutation(() => Profile)
  createProfile(
    @Args('input') profileInput: ProfileInput) {
      console.log("profileInput +++++++++++++++++++ Line 55");
      console.log(profileInput);
      return this.usersService.CreateProfileRecord(profileInput);
  }

  @Mutation(() => AuthResponse) 
  async login(@Args('input') loginInput: finduser){
    return this.usersService.login(loginInput);
  }

  @Mutation(() => AuthResponse)
  async socialLogin(
    @Args('input') socialLoginInput: SocialLoginInput,
  ): Promise<AuthResponse> {
    console.log(socialLoginInput);
    return {
      token: 'jwt token',
      permissions: ['super_admin', 'customer'],
    };
  }

  @Mutation(() => AuthResponse)
  async otpLogin(
    @Args('input') otpLoginInput: OtpLoginInput,
  ): Promise<AuthResponse> {
    console.log(otpLoginInput);
    return {
      token: 'jwt token',
      permissions: ['super_admin', 'customer'],
    };
  }

  @Mutation(() => SuccessResponse)
  async verifyOtpCode(
    @Args('input') verifyOtpInput: VerifyOtpInput,
  ): Promise<SuccessResponse> {
    console.log("verifyOtpInput +++++++++++++++++++ Line 91");
    console.log(verifyOtpInput);
    return this.usersService.updateNumber(verifyOtpInput);
    // return {
    //   message: 'success',
    //   success: true,
    // };
  }

  @Mutation(() => OtpResponse)
  async sendOtpCode(@Args('input') otpInput: OtpInput): Promise<OtpResponse> {
    console.log("sendOtpCode +++++++++++++++++++ Line 101");
    console.log(otpInput);
    return {
      message: 'success',
      success: true,
      id: '1',
      provider: 'google',
      phone_number: otpInput.phone_number,
      is_contact_exist: true,
    };
  }

  @Mutation(() => Boolean)
  async logout(): Promise<boolean> {
    return true;
  }

  @Mutation(() => PasswordChangeResponse)
  async changePassword(
    @Args('input') changePasswordInput: ChangePasswordInput,
  ): Promise<PasswordChangeResponse> {
    console.log("change password+++++++++++ line 147");
    console.log(changePasswordInput);
    return this.usersService.changePassword(changePasswordInput);
  }

  @Mutation(() => PasswordChangeResponse)
  async forgetPassword(
    @Args('input') forgetPasswordInput: ForgetPasswordInput,
  ): Promise<PasswordChangeResponse> {
    return this.usersService.forgetPassword(forgetPasswordInput);
  }

  @Mutation(() => PasswordChangeResponse)
  async verifyForgetPasswordToken(
    @Args('input')
    verifyForgetPasswordTokenInput: VerifyForgetPasswordTokenInput,
  ): Promise<PasswordChangeResponse> {
    return this.usersService.verifyForgetPasswordToken(
      verifyForgetPasswordTokenInput,
    );
  }

  @Mutation(() => PasswordChangeResponse)
  async resetPassword(
    @Args('input')
    resetPasswordInput: ResetPasswordInput,
  ): Promise<PasswordChangeResponse> {
    console.log("reset password+++++++++++ line 147");
    console.log(resetPasswordInput);
    return this.usersService.resetPassword(resetPasswordInput);
  }

  @Query(() => UserPaginator, { name: 'users' })
  async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<UserPaginator> {
    // console.log("Line 146 Users +++++++");
    // console.log(getUsersArgs);
    return this.usersService.getUsers(getUsersArgs);
  }

  @Query(() => User, { name: 'me' })
  async me(@Args() getuserToken:GetUserArgs_token): Promise<User> {
    // console.log("me ************************* query");
    // console.log(getuserToken)
    return this.usersService.me(getuserToken);
  }

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    // console.log("line 160");
    // console.log(getUserArgs);
    return this.usersService.getUser(getUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args('input') updateUserInput: UpdateUserInput) {
    console.log("updateUserInput ++++++++++++++++++++ Line 173");
    console.log(updateUserInput);
    return this.usersService.updateUser(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  activeUser(@Args('id', { type: () => ID }) id: number) {
    console.log(id);
    // return this.usersService.getUsers(updateUserInput.id);
  }

  @Mutation(() => User)
  banUser(@Args('id', { type: () => ID }) id: number) {
    console.log(id);
    // return this.usersService.getUsers(updateUserInput.id);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.remove(id);
  }

  @Mutation(() => Profiledto)
  updateProfile(@Args() updateProfileArgs: UpdateProfileArgs) {
    console.log("updateProfileArgs =========== Line 197");
    console.log(updateProfileArgs);
  }

  @Mutation(() => Profile)
  deleteProfile(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.remove(id);
  }

  @Mutation(() => Boolean)
  async makeOrRevokeAdmin(
    @Args('input') makeOrRevokeAdminInput: MakeOrRevokeAdminInput,
  ) {
    return this.usersService.makeOrRevokeAdmin(makeOrRevokeAdminInput);
  }

  @Mutation(() => Boolean)
  async subscribeToNewsletter(
    @Args('email', { type: () => String }) email: string,
  ) {
    return this.usersService.subscribeToNewsletter(email);
  }
}
