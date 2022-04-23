import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Category } from "src/categories/entities/category.entity";
import { Order } from "src/orders/entities/order.entity";
import { Product } from "./entities/product.entity";

@Schema()
export class Products extends Document{
    @Prop()
    @Field(() => ID)
    _id:string;
    
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
    unit: string;

    @Prop()
    @Field(() => Category)
    categories: Category;

    @Prop()
    @Field(() => Order)
    orders:Order;

}

export const ProductSchema= SchemaFactory.createForClass(Products); 