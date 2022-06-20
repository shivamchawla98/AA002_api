import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Profiledto{
    @Field()
    readonly _id:string;

    @Field()
    readonly bio: string;

    @Field()
    readonly avatar: string;

    @Field()
    readonly contact: string;
}

