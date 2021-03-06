import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import {
  CheckoutVerificationInput,
  VerifiedCheckoutData,
} from './dto/verify-checkout.input';
import ordersJson from './orders.json';
import orderStatusJson from './order-statuses.json';
import orderFilesJson from './order-files.json';
import { paginate } from 'src/common/pagination/paginate';
import { plainToClass } from 'class-transformer';
import { Order } from './entities/order.entity';
import { GetOrdersArgs, OrderPaginator } from './dto/get-orders.args';
import { GetOrderArgs } from './dto/get-order.args';
import {
  GetOrderStatusesArgs,
  OrderStatusPaginator,
} from './dto/get-order-statuses.args';
import { OrderStatus } from './entities/order-status.entity';
import {
  CreateOrderStatusInput,
  UpdateOrderStatusInput,
} from './dto/create-order-status.input';
import { GetOrderFilesPaginator } from './dto/get-order-file.args';
import { OrderFiles } from './entities/order.entity';
import { GenerateDownloadableUrlInput } from './dto/generate-downloadable-url.input';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Orders_ } from './orders.schema';
import { Users } from 'src/users/user.schema';
import { Products } from 'src/products/product.schema';
import { Shippings } from 'src/shippings/shippings.schema';
import { TAXES } from 'src/taxes/tax.schema';
import { delay } from 'rxjs';

const Razorpay = require('razorpay');

const orders = plainToClass(Order, ordersJson);
const orderStatus = plainToClass(OrderStatus, orderStatusJson);
const orderFiles = plainToClass(OrderFiles, orderFilesJson);


@Injectable()
export class OrdersService {
  constructor( @InjectModel(Orders_.name) private OrdersModel:Model<Orders_>,@InjectModel(Products.name) private ProductModel:Model<Products>,@InjectModel(Users.name) private userModel:Model<Users>,@InjectModel(TAXES.name) private TAXESModel:Model<TAXES>, @InjectModel(Shippings.name) private ShippingModel:Model<Shippings> ){}
  private orders: Order[] = orders;
  private orderStatus: OrderStatus[] = orderStatus;
  private orderFiles: OrderFiles[] = orderFiles;
  public ProductList = [];

  async create(createOrderInput: CreateOrderInput) {
    this.ProductList = [];
    // console.log("000000000000000000000000 USER ID");
    // console.log(createOrderInput);
    var trackingNumberObj ={}; 
    
    var payment_details = {
      PaymentMode: "COD",
      PaymentStatus:"Pending"
    }

    var instance = new Razorpay({ key_id: 'rzp_test_6KeEX1ZjMEQqzq', key_secret: 'M9B8Cad10RpKr5D3O2PuQKlY' })
    await instance.orders.create({
      amount: createOrderInput.amount*100,
      currency: "INR"
      },function(err: any, order: { id: any; }){
      // console.log(createOrderInput.total*100);
      // console.log(")))))********ORDER RAZORPAY(((((");
      // console.log(order.id);
      var a = order.id
      // console.log(a);
      trackingNumberObj={
        tracking_number:a
      }

      payment_details = {
        PaymentMode: "Razorpay",
        PaymentStatus:"Fully Paid"
      }
  
      // console.log("test");
      // console.log(payment_details);
    })


    if(createOrderInput.token){
      var IDuser = {"token":createOrderInput.token};

      var userDetails = await this.userModel.findOne(IDuser);
    // console.log("000000000000000000000000 Inside if loop where ID PRESENTTTT");
    // console.log(IDuser);
    var customerInfo={
      customer:userDetails
    }
    }

    var input = createOrderInput;
    var randomString = Math.random().toString(36).slice(2);
    // trackingNumberObj={
    //   tracking_number:randomString
    // }
    

    var StatusOtder={
      status: {
        id: 1,
        name: "Order Received",
        serial: 1,
        color: "#23b848"
      },
    }
    
    for (let index = 0; index < createOrderInput.products.length; index++) {
      var ProductId = {"_id":createOrderInput.products[index].product_id};
      var pivotvalue = {
        pivot:createOrderInput.products[index]
      }
      // console.log("PPPPPPPIIIIIIVVVVOOOTTTTT");
      // console.log(pivotvalue);
      // console.log("PPPPPPPIIIIIIVVVVOOOTTTTT");
      var productInfo = await this.ProductModel.findById(ProductId);
      var productObj =Object.assign(productInfo,pivotvalue);
      this.ProductList.push(productObj);
    }
    // console.log(this.ProductList);
      var ProductInput={
      products:this.ProductList
    }
    
    var IDObject={
      id:randomString
    }

    var dates = {
      created_at: new Date(),
      updated_at: new Date(),
    }


    var A =Object.assign(input,customerInfo);
    // console.log("continue");
    var B =Object.assign(input,trackingNumberObj);
    var C =Object.assign(input,StatusOtder);
    var D =Object.assign(input,ProductInput);
    var E =Object.assign(input,IDObject);
    var F =Object.assign(input,dates);
    var G =Object.assign(input,payment_details);
    
    // console.log(cc);
    // console.log("000000000000000000000000");
    const createOrders = new this.OrdersModel(createOrderInput);
    createOrders.save();
    
    // console.log("000000000000000000000000");
    // console.log(await this.OrdersModel.findOne({"id":`"${randomString}"`}));
    // console.log(`"${randomString}"`);
    // console.log("000000000000000000000000");
    return input;
    // return this.orders[1];
  }

  async getOrders({
    first,
    page,
    customer_id,
    tracking_number,
    shop_id,
  }: GetOrdersArgs): Promise<OrderPaginator> {
    // console.log(")()()()()()()()()()(()");
    // console.log(customer_id);
    // console.log(tracking_number);
    // console.log(shop_id);
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    //let data: Order[] = this.orders;
    let data: Order[] = await this.OrdersModel.find();
    var order_list = [];
    if(tracking_number && tracking_number != "%%"){
      data.forEach(element => {
        if((element.tracking_number.toLowerCase()).includes(tracking_number.replace(/%/g, '').toLowerCase())){
          order_list.push(element);
        }
      });
    const results = order_list.slice(startIndex, endIndex);
    return {
      data: order_list,
      paginatorInfo: paginate(order_list.length, page, first, order_list.length),
    };
    }

    if(customer_id){
      // console.log("line 174");
      var IDuser = {"token":customer_id};
      var userDetails = await this.userModel.findOne(IDuser);
      // console.log(userDetails.id);
      data.forEach(element => {
        if((element.customer.id == userDetails.id )){
          order_list.push(element);
        }
        // console.log(element.tracking_number);
        // console.log(element.customer.id);
      });
      // console.log("data");
      // console.log(order_list);

      const results = order_list.slice(startIndex, endIndex);
      return {
      data: order_list,
      paginatorInfo: paginate(order_list.length, page, first, order_list.length),
    };
    }

    
    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  async getOrder({ id, tracking_number }: GetOrderArgs): Promise<Order> {
    // let parentOrder = undefined;
    // if (id) {
    //   parentOrder = this.orders.find((p) => p.id === Number(id));
    // } else {
    //   parentOrder = this.orders.find(
    //     (p) => p.tracking_number === tracking_number,
    //   );
    // }
    // if (!parentOrder) {
    //   return this.orders[0];
    // }
    // console.log("@@@@@@@@FINDING ORDER@@@@@@@@@@@@@@@@@@");
    // console.log(id);
    // console.log(tracking_number);
    // console.log(await this.OrdersModel.findOne({"id":id}));
    if(id){
      return await this.OrdersModel.findOne({"id":id});
    }
    if(tracking_number){
      // console.log(await this.OrdersModel.findOne({"tracking_number":tracking_number}));
      // return this.orders[0];
      return await this.OrdersModel.findOne({"tracking_number":tracking_number});

    }
  }

  getOrderStatuses({
    first,
    page,
    text,
    orderBy,
  }: GetOrderStatusesArgs): OrderStatusPaginator {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    const data: OrderStatus[] = this.orderStatus;
    var orderStatus = [];

    // if (shop_id) {
    //   data = this.orders?.filter((p) => p?.shop?.id === shop_id);
    // }
    if (text && text!="%%") {
      data.forEach(element => {
        var checkOrderstatusName = (element.name.toLowerCase()).includes(text.replace(/%/g, '').toLowerCase())
        if (checkOrderstatusName == true) {
          orderStatus.push(element);
        }
      });
      // console.log(orderStatus);

      // const results = users.slice(startIndex, endIndex);
      // console.log(results);
      return {
        data: orderStatus,
        paginatorInfo: paginate(orderStatus.length, page, first, orderStatus.length),
      }; 
    }
    
    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getOrderStatus(id: number) {
    return this.orderStatus.find((p) => p.id === Number(id));
  }

  async update(id: number, updateOrderInput: UpdateOrderInput) {
    var OrderId = {"id":  id };
    var statusID = updateOrderInput.status;
    var statusValue = this.orderStatus.find((p) => p.id === Number(statusID));
    var newValues = {"status":statusValue};
    //return await this.ShippingModel.findOneAndUpdate(OrderId,newValues,{new:true})

    // console.log("%%%%%%%%%%%%Update order");
    // console.log(updateOrderInput);
    // console.log("%%%%%%%%%%%%Update order");
    // console.log(statusValue);
    // console.log("%%%%%%%%%%%%Updateed");
    // console.log(await this.OrdersModel.findOneAndUpdate(OrderId,newValues,{new:true}));
    return await this.OrdersModel.findOneAndUpdate(OrderId,newValues,{new:true});
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  async verifyCheckout(input: CheckoutVerificationInput): Promise<VerifiedCheckoutData> {
    // console.log("Checkout input");
    // console.log(input);
    var orderAmount = input.amount;
    var taxAmount = 0;
    var stateNameForTax = "Haryana";
    var cityNameForShipping = "Gurgaon";

    let products_list = [];
    let products_for_discount = [];

    input.products.forEach(element => {
      if (element.order_quantity > 9){
        products_for_discount.push(element);
      }
    });
    
    if(input.products){
      for (let index = 0; index < input.products.length; index++) {
        var ID_ = { "_id": input.products[index].product_id};
        var product = await this.ProductModel.findOne(ID_);
        products_list.push(product);
        // console.log(products_list);
      }
    }
    
    for (let index = 0; index < products_list.length; index++) {
      if(products_list[index].tax_code){
        var taxObj =await this.TAXESModel.findOne({"name":products_list[index].tax_code});
        var taxrate = taxObj.rate;
        taxAmount = (taxAmount + (products_list[index].sale_price*(taxrate/100)));
      }
      
    }


    // var taxObj =await this.TAXESModel.findOne({"state":stateNameForTax});
    // var taxRate = taxObj.rate;
    // var taxAmount = 0;
    // console.log("@@@@@@@@@@@@@@@@@@@@@@ Tax amount");
    // console.log(taxAmount); 

    var shippingObj =await this.ShippingModel.findOne({"name":cityNameForShipping});
    var shippingAmount = 0;
    // console.log("@@@@@@@@@@@@@@@@@@@@@@ Shipping amount");
    // console.log(shippingAmount); 

    
    return {
      total_tax: taxAmount,
      shipping_charge: shippingAmount,
      unavailable_products: [],
      wallet_amount: 0,
      wallet_currency: 0,
    };
  }

  createOrderStatus(createOrderStatusInput: CreateOrderStatusInput) {
    return this.orderStatus[0];
  }

  updateOrderStatus(updateOrderStatusInput: UpdateOrderStatusInput) {
    return this.orderStatus[0];
  }

  async getOrderFileItems({ first, page }: GetOrderFilesPaginator) {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: OrderFiles[] = this.orderFiles;

    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  async getDigitalFileDownloadUrl({
    digital_file_id,
  }: GenerateDownloadableUrlInput) {
    const item: OrderFiles = this.orderFiles.find(
      (singleItem) => singleItem.digital_file_id === digital_file_id,
    );

    return item.file.url;
  }
}
function sleep(arg0: number) {
  throw new Error('Function not implemented.');
}

