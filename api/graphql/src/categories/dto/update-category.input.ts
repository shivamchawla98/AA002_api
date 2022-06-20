import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { type } from 'os';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => ID)
 
  id?: number;
}
