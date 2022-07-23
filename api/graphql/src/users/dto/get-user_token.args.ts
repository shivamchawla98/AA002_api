import { ArgsType, Field, ID,InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
// @InputType()
export class GetUserArgs_token {
  token?: string;
}
