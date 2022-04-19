import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Product } from "./entities/product.entity";

@Schema()
export class Products extends Document{
    @Prop()
    name: string;
    @Prop()
    type_id: number;

    @Prop()
    quantity: number;

    @Prop()
    product_type: string;

    @Prop()
    status: string;

    @Prop()
    unit: string
}

export const ProductSchema= SchemaFactory.createForClass(Products); 