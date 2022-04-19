import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

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


}

export const UserSchema= SchemaFactory.createForClass(Users); 