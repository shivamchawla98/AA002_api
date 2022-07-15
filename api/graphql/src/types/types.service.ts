import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTypeInput } from './dto/create-type.input';
import { UpdateTypeInput } from './dto/update-type.input';
import { Type } from './entities/type.entity';
import typesJson from './types.json';
import Fuse from 'fuse.js';
import { GetTypesArgs } from './dto/get-types.args';
import { GetTypeArgs } from './dto/get-type.args';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from './types.schema';
import {Model} from 'mongoose';
import { Categories_ } from 'src/categories/categories.schema';


const types = plainToClass(Type, typesJson);
const options = {
  keys: ['name'],
  threshold: 0.3,
};
const fuse = new Fuse(types, options);
@Injectable()
export class TypesService {
  private types: Type[] = types;
  constructor(@InjectModel(Categories_.name) private CategoriesModel:Model<Categories_> , @InjectModel(Types.name) private TypesModel:Model<Types> ){}

  create(createTypeInput: CreateTypeInput) {
    var Slug = createTypeInput.name;
    var SlugObject ={
      slug:Slug
    }
    var TypeInput =Object.assign(createTypeInput,SlugObject);
    // console.log("assigned object###");
    // console.log(TypeInput);
    // console.log("createTypeInput");
    // console.log(createTypeInput);
    const createtype = new this.TypesModel(TypeInput);
    createtype.save();
    return this.types[0];
  }

  async getTypes({ text }: GetTypesArgs) {
    // let data: Type[] = this.types;
    // console.log(text);

    let data: Type[] = await this.TypesModel.find();
    var types = [];

    if (text && text!="%%") {
      data.forEach(type => {
        var checkTypeSlug = (type.slug.toLowerCase()).includes(text.replace(/%/g, '').toLowerCase())
        if (checkTypeSlug == true) {
          types.push(type);
        }
      });
      return types;
    }
    // if (text?.replace(/%/g, '')) {
    //   data = fuse.search(text)?.map(({ item }) => item);
    // }
    // console.log(GetTypesArgs);
    // console.log("###################getTypes#########################");
    // console.log(data[0].banners);
    return data;
  }

  async getType({ id, slug }: GetTypeArgs): Promise<Type> {
    // console.log("getType");
    // console.log(id);
    // console.log(slug);
    if (id) {
      //console.log(id);
      //return this.types.find((p) => p.id === Number(id));
      // console.log(await this.TypesModel.findById({"_id":id}))
      var data = await this.TypesModel.findById({"_id":id});
      // console.log("###################getTypes#########################");
      // console.log(data.banners);
      return await this.TypesModel.findById({"_id":id});
    }
    // console.log(await this.TypesModel.findOne({"slug":slug}));
    var data = await this.TypesModel.findOne({"slug":slug});
    // console.log("###################getTypes#########################");
    //  console.log(data.banners);
    return await this.TypesModel.findOne({"slug":slug});
  }

  findOne(id: number) {
    // console.log("FIND ONE");
    return `This action returns a #${id} type`;
  }

  async update(id: number, updateTypeInput: UpdateTypeInput) {
    var TypeID = {"_id":  id };
    var Slug = updateTypeInput.name;
    var SlugObject ={
      slug:Slug
    }
    var TypeInput =Object.assign(updateTypeInput,SlugObject);
    return await this.TypesModel.findOneAndUpdate(TypeID,TypeInput,{new:true})
    // return this.types[0];
  }

  async remove(id: number) {
    var Typeid = {"_id":  id };
    var deletedType = await this.TypesModel.findOne(Typeid);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.TypesModel.findOneAndDelete((Typeid), function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted User : ", docs);
      }
  });
 //console.log(a);
    return deletedType;
    // return `This action removes a #${id} type`;
  }
}
