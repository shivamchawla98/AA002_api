import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import attributesJson from './attributes.json';
import { Attribute } from './entities/attribute.entity';
import { GetAttributeArgs } from './dto/get-attribute.args';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Attributes_ } from './attributes.schema';

const attributes = plainToClass(Attribute, attributesJson);
@Injectable()
export class AttributesService {
  private attributes: Attribute[] = attributes;
  constructor( @InjectModel(Attributes_.name) private AttributesModel:Model<Attributes_> ){}

  create(createAttributeInput: CreateAttributeInput) {
    // console.log(createAttributeInput);
    
    var num = 0;
    createAttributeInput.values.forEach(element => {
      element.id=num+1
    });

    var SlugObject = {
      slug: createAttributeInput.name
    }

    var ShopObject = {
      shop: {
        name:'shops'
      }
    }

    var A =Object.assign(createAttributeInput,SlugObject);
    var B =Object.assign(createAttributeInput,ShopObject);
    
    const createattributes = new this.AttributesModel(createAttributeInput);
    createattributes.save();
    return this.attributes[0];
  }

  async findAll() {
    let data = await this.AttributesModel.find();
    return data;
  }

  async findOne({ id, slug }: GetAttributeArgs) {
    if (id) {
      // return this.products.find((p) => p.id === Number(id));
      var ID_ = { "_id": id };
      // console.log("Product details");
      // console.log(await this.ProductModel.findOne(ID_));
      return await this.AttributesModel.findOne(ID_);

    }
    if (slug) {
      // console.log("Product details");
      // console.log(await this.ProductModel.findOne({"slug":slug}));
      return await this.AttributesModel.findOne({ "slug": slug });
    }
  }

  async update(id: number, updateAttributeInput: UpdateAttributeInput) {
    console.log(id);
    console.log(updateAttributeInput);
    var AttributeID = { "_id": id };
    await this.AttributesModel.findByIdAndUpdate(AttributeID, updateAttributeInput, { new: true })
    return this.attributes[0];
  }

  async remove(id: number) {
    var AttributeId = { "_id": id };
    var deletedAttribute = await this.AttributesModel.findOne(AttributeId);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.AttributesModel.findOneAndDelete((AttributeId), function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Deleted User : ", docs);
      }
    });
    //console.log(a);
    return deletedAttribute;
    // return `This action removes a #${id} attribute`;
  }
}
