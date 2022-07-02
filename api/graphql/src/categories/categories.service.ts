import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import Fuse from 'fuse.js';
import categoriesJson from './categories.json';
import { Category } from './entities/category.entity';
import { paginate } from 'src/common/pagination/paginate';
import { GetCategoriesArgs } from './dto/get-categories.args';
import { GetCategoryArgs } from './dto/get-category.args';
import { Categories_ } from './categories.schema';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Types } from 'src/types/types.schema';


const categories = plainToClass(Category, categoriesJson);
const options = {
  keys: ['name', 'type.slug'],
  threshold: 0.3,
};
const fuse = new Fuse(categories, options);

@Injectable()
export class CategoriesService {
  private categories: Category[] = categories;
  constructor( @InjectModel(Categories_.name) private CategoriesModel:Model<Categories_> , @InjectModel(Types.name) private TypesModel:Model<Types>){}

  async create(createCategoryInput: CreateCategoryInput) {
    
    if(createCategoryInput.parent){
      var parentCategory = await this.CategoriesModel.findOne({"_id":createCategoryInput.parent});
      var ParentObj = {
        parent : parentCategory
      }

      var x =[];

      var Type_Id = createCategoryInput.type.connect;
      var TypeObj = {
        name:"TYPE",
        slug:"TYPE"
      }
      parentCategory.children.forEach(async element => {

        x.push(element);
      });

      var randomString = Math.random().toString(36).slice(2);
      var IDCategory={
      id:randomString
      }

      var Slug = createCategoryInput.name;
      var SlugObject ={
        slug:Slug
      }

      var n = Object.assign(createCategoryInput,SlugObject);
      var l = Object.assign(createCategoryInput,IDCategory);
      var m = Object.assign(createCategoryInput.type,TypeObj);      

      x.push(createCategoryInput);
      var child = {
      children: x
      }
      var testobj = Object.assign(parentCategory,child);
      // console.log(l);
      // console.log("!!!!!!!!!!!!!!!!!!!!!  ");
      // console.log(m);
      // console.log("!!!!!!!!!!!!!!!!!!!!!")
      // console.log(createCategoryInput);
      // console.log("!!!!!!!!!!!!!!!!!!!!!")
      // console.log(testobj);

      
      const createcategories = new this.CategoriesModel(testobj);
      createcategories.save();
      return this.categories[0];
    }
    if(!createCategoryInput.parent)
    {
      var Slug = createCategoryInput.name;
      var SlugObject ={
        slug:Slug
      }
      var A =Object.assign(createCategoryInput,SlugObject);
      var Type_Id = createCategoryInput.type.connect;
      var TypeObj1 = await this.TypesModel.findOne({"_id":Type_Id});
      var parentCategory = await this.CategoriesModel.findOne({"_id":createCategoryInput.parent});
      var ParentObj = {
        parent : parentCategory
      }
      
      var B =Object.assign(createCategoryInput,ParentObj);
      var TypeInput =Object.assign(A.type,TypeObj1);
  
      // console.log("TYPE OBJECT FROM CATEGORIES")
      // console.log(TypeInput);
      const createcategories = new this.CategoriesModel(createCategoryInput);
      createcategories.save();
      return this.categories[0];
    }
    
  }

  // async getCategories({ text, first, page, hasType, parent }: GetCategoriesArgs) {
  //   const startIndex = (page - 1) * first;
  //   const endIndex = page * first;
  //   let data: Category[] = await this.CategoriesModel.find();
  //   // if (text?.replace(/%/g, '')) {
  //   //   data = fuse.search(text)?.map(({ item }) => item);
  //   // }
  //   // if (hasType?.value) {
  //   //   data = fuse.search(hasType.value as unknown)?.map(({ item }) => item);
  //   // }
  //   // if (parent === null) {
  //   //   data = data.filter(({ parent: parentValue }) => parentValue === null);
  //   // }
  //   // const results = data.slice(startIndex, endIndex);
  //   return {
  //     data: data,
  //     paginatorInfo: paginate(data.length, page, first, data.length),
  //   };
  // }


  async getCategories({ text, first, page, hasType, parent }: GetCategoriesArgs) {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    // let data: Category[] = this.categories;
    let data:Category[]=[];
    let a:Category[]=[];
    var result = [];
    
    let queryResult: Category[] = await this.CategoriesModel.find();
    // console.log("CATEGORY ******");
    // console.log(queryResult);
  
    if(hasType){
      // console.log("into hastype ---------");
      queryResult.forEach(element => {
        if(element.type.slug == hasType?.value){
          data.push(element);
        }
      });
      return {
        data: data,
        paginatorInfo: paginate(data.length, page, first, data.length),
      };
    }
    if(text && text !="%%"){
      queryResult.forEach(element => {
        if(element.children){
          element.children.forEach(child => {
            var checkTypeSlug = (child.slug.toLowerCase()).includes(text.replace(/%/g, '').toLowerCase())
            if (checkTypeSlug == true) {
            result.push(child);
          }
        });
        }
      });

      return {
        data: result,
        paginatorInfo: paginate(data.length, page, first, data.length),
      };
    }
    else{       
      // console.log("category test");
      queryResult.forEach(element => {
        if(element.children){
          element.children.forEach(child => {
            // console.log(child);
            a.push(child);
          });
          
        }
      });
      return {
        data: a,
        paginatorInfo: paginate(data.length, page, first, data.length),
      };
    }
    
  }

  async getCategory({ id, slug }: GetCategoryArgs): Promise<Category> {
    if (id) {
      // return this.categories.find((p) => p.id === Number(id));
      return await this.CategoriesModel.findOne({"_id":id});
    }
    return await this.CategoriesModel.findOne({slug:slug});;
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    var CategoryId = {"_id":  id };
    var Type_Id = updateCategoryInput.type.connect;
    // console.log(Type_Id);
    var TypeObj = await this.TypesModel.findOne({"_id":Type_Id});
    // console.log(TypeObj);
    var TypeInput =Object.assign(updateCategoryInput.type,TypeObj);
    var parentCategory = await this.CategoriesModel.findOne({"_id":updateCategoryInput.parent});
    // console.log(parentCategory);
    var ParentObj = {
      parent : parentCategory
    }
    var B =Object.assign(updateCategoryInput,ParentObj);
    
    return await this.CategoriesModel.findOneAndUpdate(CategoryId,updateCategoryInput,{new:true})
    // return this.categories[0];
  }

  async remove(id: number) {
    var CategoryId = {"_id":  id };
    var deletedType = await this.CategoriesModel.findOne(CategoryId);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.CategoriesModel.findOneAndDelete((CategoryId), function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted User : ", docs);
      }
  });
 //console.log(a);
    return deletedType;
    // return `This action removes a #${id} category`;
  }
}
