import { RegisterInput } from './create-user.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { UserAddressInput } from '../../orders/dto/create-order.input';
import { AddressType } from '../../addresses/entities/address.entity';
import { Profile } from './../entities/profile.entity';
import { Attachment } from 'src/common/entities/attachment.entity';

@InputType()
class ProfileUpsertInput {
  @Field(() => ID, { nullable: true })
  id?: number;
  bio?: string;
  contact?: string;
  avatar?: Attachment;
}

@InputType()
export class UpdateUserInput extends PartialType(RegisterInput) {
  @Field(() => ID)
  id: number;
  GST_Number?: string;
  name?: string;
  address?: AddressHasMany;
  profile?: ProfileHasMany;
}

@InputType()
class AddressHasMany {
  @Field(() => [UserAddressUpsertInput], { nullable: 'itemsAndList' })
  upsert?: UserAddressUpsertInput[];
}
@InputType()
class ProfileHasMany {
  profile?: Profile;
  @Field(() => [ProfileUpsertInput], { nullable: 'itemsAndList' })
  upsert?: ProfileUpsertInput;
}


@InputType()
class UserAddressUpsertInput {
  @Field(() => ID, { nullable: true })
  id?: number;
  title: string;
  default?: boolean;
  address: UserAddressInput;
  type: AddressType;
}

