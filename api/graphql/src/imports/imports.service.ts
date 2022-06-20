import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Categories_ } from 'src/categories/categories.schema';
import { Products } from 'src/products/product.schema';
import { Types } from 'src/types/types.schema';
import { ImportInput } from './dto/create-import.input';
import { Model } from 'mongoose';
import { Shop } from 'src/shops/entities/shop.entity';
import shopsJson from 'src/shops/shops.json';
import { plainToClass } from 'class-transformer';



const shops = plainToClass(Shop, shopsJson);


@Injectable()
export class ImportsService {

  constructor(@InjectModel(Products.name) private ProductModel: Model<Products>, @InjectModel(Types.name) private TypesModel: Model<Types>, @InjectModel(Categories_.name) private CategoriesModel: Model<Categories_>) { }
  private shops: Shop[] = shops;


  async create(a) {
    
    var typeid = a.type_id;
    //console.log(typeid);
    var TypeValue = await this.TypesModel.findOne({ "_id": typeid });

    var TypeObj = {
      type: TypeValue
    }
    var TypeInput = Object.assign(a, TypeObj);
    // console.log("#########33")
    // console.log(createProductInput);
    var Slug = a.name;
    var SlugObject = {
      slug: Slug
    }
    var A = Object.assign(a, SlugObject);
    var variation_options = {
      id: 1
    }
    var B = Object.assign(a, variation_options);
    var ShopObject = {
      shop: this.shops[0]
    }
    var C = Object.assign(a, ShopObject);
    var Category = await this.CategoriesModel.findOne({ "_id": "62827f36947fc078bfbf35c5" });
    var CatObj = {
      categories: Category
    }

    var D = Object.assign(a, CatObj);

    const createproduct = new this.ProductModel(a);

    createproduct.save();

    return 'This action adds a new import';
  }
}
