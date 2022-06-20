import { ID, Int } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Attachment } from "src/common/entities/attachment.entity";
import { ContactDetails, DeliveryTime, FacebookSettings, GoogleSettings, SeoSettings, SettingsOptions, testSettingInput } from "./entities/setting.entity";



@Schema()
export class Settings_ extends Document{
    // @Prop()
    // @Field(()=>ID)
    // id?: number;
    @Prop()
    created_at?: Date;
    @Prop()
    updated_at?: Date;
    
    @Prop()
    options: SettingsOptions;

}

export const SettingsSchema= SchemaFactory.createForClass(Settings_); 