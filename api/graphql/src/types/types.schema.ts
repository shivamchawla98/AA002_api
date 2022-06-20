import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Attachment } from "src/common/entities/attachment.entity";
import { Banner, TypeSettings } from "./entities/type.entity";


@Schema()
export class Types extends Document{
    @Prop()
    name: string;
    @Prop()
    slug: string;
    @Prop()
    image: string;
    @Prop()
    icon: string;
    @Prop()
    banners?: Banner[];
    @Prop()
    promotional_sliders?: Attachment[];
    @Prop()
    settings?: TypeSettings;

}

export const TypeSchema= SchemaFactory.createForClass(Types); 