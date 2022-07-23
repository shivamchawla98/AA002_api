import { ID } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Attachment } from "src/common/entities/attachment.entity";
import { Social } from "./entities/profile.entity";
import { Permissions, User } from "./entities/user.entity";

@Schema()
export class Profile extends Document {
  @Prop()
  @Field(() => ID)
  id: number;
  @Prop()
  @Field(() => Attachment)
  avatar?: Attachment;
  @Prop()
  bio?: string;
  @Prop()
  @Field(() => Social)
  socials?: Social[];
  @Prop()
  contact?: string;
  @Prop()
  @Field(() => User)
  customer?: User;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile); 