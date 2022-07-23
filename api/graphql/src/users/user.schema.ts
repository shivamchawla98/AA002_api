import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Address } from "src/addresses/entities/address.entity";
import { Order } from "src/orders/entities/order.entity";
import { Refund } from "src/refunds/entities/refund.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { Wallet } from "src/wallets/entities/wallet.entity";
import { Profile } from "./entities/profile.entity";
import { Permissions } from "./entities/user.entity";

@Schema()
export class Users extends Document{

    @Prop()
    id:number;
    
    @Prop()
    name: string;

    @Prop()
    GST_Number: string;
    
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at:Date;

    @Prop()
    shop_id?: number;

    @Prop()
    profile?: Profile;

    @Prop()    
    shops?: Shop[];

    @Prop()
    refunds?: Refund[];

    @Prop()
    managed_shop?: Shop;

    @Prop()
    is_active?: boolean = true;

    @Prop()
    address?: Address[];

    @Prop()
    orders?: Order[];

    @Prop()
    wallet?: Wallet;

    @Prop()
    token: String;

    @Prop()
    permissions:Permissions[];

}

export const UserSchema= SchemaFactory.createForClass(Users); 