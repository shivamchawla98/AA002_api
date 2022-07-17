import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Shop } from "src/shops/entities/shop.entity";
import { AttributeValue } from "./entities/attribute-value.entity";



@Schema()
export class Attributes_ extends Document{
    @Prop()
    name: string;
    @Prop()
    shop_id: number;
    @Prop()
    shop: Shop;
    @Prop()
    slug: string;
    @Prop()
    values: AttributeValue[];
    
}

export const AttributesSchema= SchemaFactory.createForClass(Attributes_); 

function TypeTransformer(arg0: () => any) {
    throw new Error("Function not implemented.");
}
