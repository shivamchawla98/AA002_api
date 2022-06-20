import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { CreateTaxInput } from './dto/create-tax.input';
import { GetTaxesArgs } from './dto/get-taxes.args';
import { UpdateTaxInput } from './dto/update-tax.input';
import { Tax } from './entities/tax.entity';
import { TAXES } from './tax.schema';
import taxesJson from './taxes.json';
import {Model} from 'mongoose';
const taxes = plainToClass(Tax, taxesJson);
@Injectable()
export class TaxesService {
  private taxes: Tax[] = taxes;
  constructor( @InjectModel(TAXES.name) private TAXESModel:Model<TAXES> ){}

  create(createTaxInput: CreateTaxInput) {
    const createtaxes = new this.TAXESModel(createTaxInput);
    createtaxes.save();

    return this.taxes[0];
  }

  async findAll(getTaxesArgs: GetTaxesArgs) {
    let data: Tax[] = await this.TAXESModel.find();
    return data;
  }

  async findOne(id: number) {
    //return this.taxes.find((tax) => tax.id === Number(id));
    return await this.TAXESModel.findOne({"_id":id});
  }

  async update(id: number, updateTaxInput: UpdateTaxInput) {
    var TaxId = {"_id":  id };
    var newValues = updateTaxInput;
    // console.log(id);
    // console.log(updateTaxInput);
    return await this.TAXESModel.findOneAndUpdate(TaxId,newValues,{new:true})
   // return this.taxes[0];
  }

  async remove(id: number) {
    
    var TAXid = {"_id":  id };
    var deletedTAX = await this.TAXESModel.findOne(TAXid);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.TAXESModel.findOneAndDelete((TAXid), function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted User : ", docs);
      }
  });
 //console.log(a);
    return deletedTAX;
  }


}
