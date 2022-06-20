import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Category } from "src/categories/entities/category.entity";
import { Attachment } from "src/common/entities/attachment.entity";
import { Product } from "src/products/entities/product.entity";
import { Type } from "src/types/entities/type.entity";


@Schema()
export class Categories_ extends Document{
   
    @Prop()
    name?: string;
    @Prop()
    slug?: string;
    @Prop()
    @Field(() => ID, { nullable: true })
    parent_id?: number;
    @Prop()
    parent?: Category;
    @Prop()
    @Field(() => [Category], { nullable: 'itemsAndList' })
    children?: Category[];
    @Prop()
    @Field(() => [Category], { nullable: 'itemsAndList' })
    sub_categories?: Category[];
    @Prop()
    @Field(() => Number , { nullable: true })
    products_count?: number;
    @Prop()
    details?: string;
    @Prop()
    image?: Attachment;
    @Prop()
    icon?: string;
    @Prop()
    type?: Type;
    @Prop()
    @Field(() => [Product], { nullable: 'itemsAndList' })
    products?: Product[];
}

export const CategoriesSchema= SchemaFactory.createForClass(Categories_); 

function TypeTransformer(arg0: () => any) {
    throw new Error("Function not implemented.");
}
