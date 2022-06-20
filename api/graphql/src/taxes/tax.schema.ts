import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';


@Schema()
export class TAXES extends Document{

    // @Prop()
    // @Field(()=>ID)
    // id:number
    @Prop()
    name: string;
    @Prop()
  rate: number;
  @Prop()
  @Field(() => Boolean)
  is_global: Boolean;
  @Prop()
  country?: string;
  @Prop()
  state?: string;
  @Prop()
  zip?: string;
  @Prop()
  city?: string;
  @Prop()
  @Field(() => Number)
  priority?: number;
  @Prop()
  on_shipping?: boolean;

}

export const TAXSESchema= SchemaFactory.createForClass(TAXES); 