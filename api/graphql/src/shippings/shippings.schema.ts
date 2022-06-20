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
import { ShippingType } from "./entities/shipping.entity";

@Schema()
export class Shippings extends Document{
    // @Prop()
    // @Field(()=>ID)
    // id:number
    @Prop()
    name: string;
    @Prop()
  amount: number;
  @Prop()
    @Field(()=>Boolean)
  is_global : Boolean;
  @Prop()
  @Field(()=>ShippingType)
  type: ShippingType;

}

export const ShippingSchema= SchemaFactory.createForClass(Shippings); 

function TypeTransformer(arg0: () => any) {
    throw new Error("Function not implemented.");
}
