import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { CreateShippingInput } from './dto/create-shipping.input';
import { GetShippingsArgs } from './dto/get-shippings.args';
import { UpdateShippingInput } from './dto/update-shipping.input';
import { Shipping } from './entities/shipping.entity';
import shippingsJson from './shippings.json';
import { Shippings } from './shippings.schema';
import {Model} from 'mongoose';

const shippings = plainToClass(Shipping, shippingsJson);
@Injectable()
export class ShippingsService {
  private shippings: Shipping[] = shippings;
  constructor( @InjectModel(Shippings.name) private ShippingModel:Model<Shippings>){}


  create(createShippingInput: CreateShippingInput) {
    const createShipping = new this.ShippingModel(createShippingInput);
    createShipping.save();
    return this.shippings[0];
  }

  async findAll(getShippingsArgs: GetShippingsArgs) {
    console.log(getShippingsArgs);  
    let data: Shipping[] = await this.ShippingModel.find();
    let filteredData = [];
    if (getShippingsArgs.text == '%%'){
      console.log("1");
      return data;
    }
    if (getShippingsArgs.text && getShippingsArgs.text != '%%'){
      console.log("2");
      data.forEach(element => {
        if ((element.name.toLowerCase()).includes(getShippingsArgs.text.replace(/%/g, '').toLowerCase())){
          filteredData.push(element);
        }
      });

      return filteredData
    }
    else {
      console.log("3");
      return data;
    }

  }

  async findOne(id: number) {
    console.log(id);
    //return this.shippings.find((shipping) => shipping.id === Number(id));
    return await this.ShippingModel.findOne({"_id":id});

  }

  async update(id: number,updateShippingInput: UpdateShippingInput) {
    var ShippingId = {"_id":  id };
    var newValues = updateShippingInput;
    return await this.ShippingModel.findOneAndUpdate(ShippingId,newValues,{new:true})
    //return this.shippings[0];
  }

  async remove(id: number) {
    
    var ShippingId = {"_id":  id };
    var deletedShipping = await this.ShippingModel.findOne(ShippingId);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.ShippingModel.findOneAndDelete((ShippingId), function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted shipping : ", docs);
      }
  });
 //console.log(a);
    return deletedShipping;
  }
}
