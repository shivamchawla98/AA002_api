import { ID, ObjectType } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { UserAddress } from "src/addresses/entities/address.entity";
import { Coupon } from "src/coupons/entities/coupon.entity";
import { Product } from "src/products/entities/product.entity";
import { Refund } from "src/refunds/entities/refund.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { User } from "src/users/entities/user.entity";
import { OrderStatus } from "./entities/order-status.entity";
import { Order, PaymentGatewayType } from "./entities/order.entity";

@ObjectType()
class WalletPoint {
  @Field(() => ID)
  id: number;
  amount: number;
}

@Schema()
export class Orders_ extends Document{
    @Field(()=> ID)
    @Prop()
    id:string
    @Prop()
    tracking_number: string;
    @Prop()
  @Field(() => ID)
  customer_id: number;
  @Prop()
  customer_contact: string;
  @Prop()
  customer: User;
  @Prop()
  @Field(() => Order)
  parent_order?: Order;
  @Prop()
  @Field(() => Order)
  children: Order[];
  @Prop()
  status: OrderStatus;
  @Prop()
  amount: number;
  @Prop()
  sales_tax: number;
  @Prop()
  total: number;
  @Prop()
  paid_total: number;
  @Prop()
  payment_id?: string;
  @Prop()
  payment_gateway?: PaymentGatewayType;
  @Prop()
  coupon?: Coupon;
  @Prop()
  shop: Shop;
  @Prop()
  discount?: number;
  @Prop()
  delivery_fee: number;
  @Prop()
  delivery_time?: string;
  @Prop()
  @Field(() => Product)
  products: Product[];
  @Prop()
  billing_address?: UserAddress;
  @Prop()
  shipping_address?: UserAddress;
  @Prop()
  refund?: Refund;
  @Prop()
  wallet_point?: WalletPoint;
  // @Prop()
  // token: string;
  @Prop()
    created_at: Date;

  @Prop()
    updated_at:Date;
    
}

export const OrderSchema= SchemaFactory.createForClass(Orders_); 


function TypeTransformer(arg0: () => any) {
    throw new Error("Function not implemented.");
}
