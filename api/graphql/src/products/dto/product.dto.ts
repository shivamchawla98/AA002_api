import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class ProductDto{
    @Field()
    readonly _id:string;

    @Field()
    readonly name: string;

}

