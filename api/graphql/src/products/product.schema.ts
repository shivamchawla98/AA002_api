import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { AttributeValue } from "src/attributes/entities/attribute-value.entity";
import { Author } from "src/authors/entities/author.entity";
import { Category } from "src/categories/entities/category.entity";
import { Attachment } from "src/common/entities/attachment.entity";
import { Manufacturer } from "src/manufacturers/entities/manufacturer.entity";
import { Order } from "src/orders/entities/order.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Type } from "src/types/entities/type.entity";
import { OrderProductPivot, Product, Variation } from "./entities/product.entity";

@Schema()
export class Products extends Document{
    // @Prop()
    // @Field(()=>ID)
    // id:number;
    @Prop()
    name: string;
    @Prop()
  slug: string;
  @Prop()
  type: Type;
  @Prop()
  
  type_id: string;
  @Prop()
  product_type: string;
  @Prop()
  categories?: Category;
  @Prop()
  tags?: Tag[];
  @Prop()
  variations?: AttributeValue[];
  @Prop()
  variation_options?: Variation[];
  @Prop()
  pivot?: OrderProductPivot;
  @Prop()
  orders?: Order[];
  @Prop()
  shop?: Shop;
  @Prop()
  author?: Author;
  @Prop()
  manufacturer?: Manufacturer;
  @Prop()
  @Field(() => ID)
  shop_id?: number;
  @Prop()
  @Field(() => ID)
  author_id?: number;
  @Prop()
  @Field(() => ID)
  manufacturer_id?: number;
  @Prop()
  related_products?: Product[];
  @Prop()
  description?: string;
  @Prop()
  in_stock?: boolean;
  @Prop()
  is_taxable?: boolean;
  @Prop()
  is_digital?: boolean;
  @Prop()
  is_external?: boolean;
  @Prop()
  external_product_url?: string;
  @Prop()
  external_product_button_text?: string;
  @Prop()
  sale_price?: number;
  @Prop()
  max_price?: number;
  @Prop()
  min_price?: number;
  @Prop()
  sku?: string;
  @Prop()
  gallery?: Attachment[];
  @Prop()
  image?: Attachment;
  @Prop()
  status: string;
  @Prop()
  height?: string;
  @Prop()
  length?: string;
  @Prop()
  width?: string;
  @Prop()
  price?: number;
  @Prop()
 
  quantity: number;
  @Prop()
  unit: string;

}

export const ProductSchema= SchemaFactory.createForClass(Products); 

function TypeTransformer(arg0: () => any) {
    throw new Error("Function not implemented.");
}
