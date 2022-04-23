import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Profile } from "./entities/profile.entity";
import { Permissions } from "./entities/user.entity";

@Schema()
export class Users extends Document{
    @Prop()
    name: string;
    
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    shop_id: number;

    @Prop()
    @Field(() => Permissions)
    permission: Permissions;

    @Prop()
    @Field(() => Profile)
    profile:Profile;


}

export const UserSchema= SchemaFactory.createForClass(Users); 