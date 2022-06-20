import { ID, Int } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { UserAddress } from "src/addresses/entities/address.entity";
import { Attachment} from "src/common/entities/attachment.entity";
import { User } from "src/users/entities/user.entity";
import { Balance, ShopSettings } from "./entities/shop.entity";


@Schema()
export class shops_ extends Document{
    @Prop()
    name: string;
    
    @Prop()
    @Field(() => Int)
    owner_id: number;
    @Prop()
    owner: User;
    @Prop()
    staffs?: User[];
    @Prop()
    is_active: boolean;
    @Prop()
    @Field(() => Int)
    orders_count: number;
    @Prop()
    @Field(() => Int)
    products_count: number;
    @Prop()
    balance?: Balance;
    
    @Prop()
    slug: string;
    @Prop()
    description?: string;
    @Prop()
    cover_image?: Attachment;
    @Prop()
    logo?: Attachment;
    @Prop()
    address: UserAddress;
    @Prop()
    settings?: ShopSettings;

}

export const ShopSchema= SchemaFactory.createForClass(shops_); 