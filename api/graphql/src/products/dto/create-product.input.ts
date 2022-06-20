import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
  ID,
  OmitType
} from '@nestjs/graphql';
import { Shop } from 'src/shops/entities/shop.entity';
import { Type } from 'src/types/entities/type.entity';
import { Product, VariationInput } from '../entities/product.entity';

@InputType()
class UpsertVariationsHasMany {
  upsert?: VariationInput[];
  @Field(() => [ID], { nullable: true })
  delete?: number[];
}
export class ConnectTypeBelongsTo {
  @Field(() => ID)
  connect: number;
}
@InputType()
export class CreateProductInput extends OmitType(Product, [
  'id',
  'slug',
  'created_at',
  'updated_at',
  'orders',
  'pivot',
  'categories',
  'tags',
  'type',
  'shop',
  'related_products',
  'variation_options',
]) {
  @Field(() => [ID])
  categories?: string[];
  @Field(() => [ID])
  tags?: string[];
  @Field(() => UpsertVariationsHasMany)
  variation_options?: UpsertVariationsHasMany;
  @Field(() => Shop)
  shop?: Shop;
  @Field(() => [ID])
  type?: ConnectTypeBelongsTo;
}

@InputType()
export class RegisterProduct extends PickType(Product, [
  'name',
]) {

}

