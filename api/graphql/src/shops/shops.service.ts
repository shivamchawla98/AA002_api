import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { Shop } from './entities/shop.entity';
import Fuse from 'fuse.js';
import shopsJson from './shops.json';
import { GetShopsArgs } from './dto/get-shops.args';
import { paginate } from 'src/common/pagination/paginate';
import { GetShopArgs } from './dto/get-shop.args';
import { GetStaffsArgs } from './dto/get-staffs.args';
import { InjectModel } from '@nestjs/mongoose';
import { shops_ } from './shop.schema';
import {Model} from 'mongoose';
import { Users } from 'src/users/user.schema';

const shops = plainToClass(Shop, shopsJson);
const options = {
  keys: ['name', 'type.slug'],
  threshold: 0.3,
};
const fuse = new Fuse(shops, options);
@Injectable()
export class ShopsService {
  private shops: Shop[] = shops;

  constructor( @InjectModel(shops_.name) private shopModel:Model<shops_> , @InjectModel(Users.name) private UsersModel:Model<Users>){}

  async create(createShopInput: CreateShopInput) {
    var Slug = createShopInput.name;
    var SlugObject ={
      slug:Slug,
      is_active: true,
      orders_count : 0,
      owner_id : 0,
      products_count : 0
    }
    var A =Object.assign(createShopInput,SlugObject);
    var owner = {owner : await this.UsersModel.findOne({"id":1})};
    var B =Object.assign(createShopInput,owner);
    
    var balance = {
      
      admin_commission_rate: 0,
      
      total_earnings : 0,
      withdrawn_amount : 0,
      current_balance : 0      
    }
    var C =Object.assign(createShopInput.balance,balance);
   
    console.log("**********");
    console.log(owner);
    console.log("#####Create Shop#######");
    console.log(createShopInput);
    const createshop = new this.shopModel(createShopInput);
    createshop.save();
    console.log(await this.shopModel.find());
    return this.shops[0];
  }

  async getShops({ text, first, page }: GetShopsArgs) {
    // const startIndex = (page - 1) * first;
    // const endIndex = page * first;
    // // let data: Shop[] = this.shops;
    // let data: Shop[] =await this.shopModel.find();
    // if (text?.replace(/%/g, '')) {
    //   data = fuse.search(text)?.map(({ item }) => item);
    // }
    // const results = data.slice(startIndex, endIndex);
    // return {
    //   data: results,
    //   paginatorInfo: paginate(data.length, page, first, results.length),
    // };

    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Shop[] = this.shops;
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }
    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };

  }
  getStaffs({ shop_id, first, page }: GetStaffsArgs) {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let staffs: Shop['staffs'] = [];
    if (shop_id) {
      staffs = this.shops.find((p) => p.id === Number(shop_id))?.staffs ?? [];
    }
    const results = staffs?.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(staffs?.length, page, first, results?.length),
    };
  }

  getShop({ id, slug }: GetShopArgs): Shop {
    console.log(id);
    if (id) {
      return this.shops[0];
    }
    return this.shops[0];
  }

  update(id: number, updateShopInput: UpdateShopInput) {
    return this.shops[0];
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
