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
    // console.log("]]]]]]]]]]");
    // console.log(createCategoryInput);
    if(!createCategoryInput.type.connect && !createCategoryInput?.parent){
      var typeValue = await this.TypesModel.find();
      
      var typeInput = {
        name:createCategoryInput.name,
        slug:createCategoryInput.name,
        icon:typeValue[0].icon,
        banners:typeValue[0].banners,
        promotional_sliders:typeValue[0].promotional_sliders,
        settings:typeValue[0].settings,
        _v:typeValue[0].__v

      }
      
      const createType = new this.TypesModel(typeInput);
      createType.save();

      var groupvalue = await this.TypesModel.findOne({"name":createCategoryInput.name});
      // console.log(groupvalue);
      // createCategoryInput.type.connect = groupvalue._id;

      // console.log("=[=[=[=[=[=");
      // console.log(2222);
      var Slug = createCategoryInput.name;
      var SlugObject ={
        slug:Slug
      }
      var A1 =Object.assign(createCategoryInput,SlugObject);
      var Type_Id = createCategoryInput.type.connect;
      var TypeObj1 = await this.TypesModel.findOne({"_id":Type_Id});
      var parentCategory = await this.CategoriesModel.findOne({"_id":createCategoryInput.parent});

      var ParentObj1 = {
        parent : parentDetails
      }
      
      var B1 =Object.assign(createCategoryInput,ParentObj1);
      var TypeInput1 =Object.assign(A1.type,typeInput);
  
      // console.log("TYPE OBJECT FROM CATEGORIES")
      // console.log(TypeInput);
      const createcategories = new this.CategoriesModel(createCategoryInput);
      createcategories.save();
      return this.categories[0];
    }

    if(createCategoryInput.parent){
      // console.log("line 79 =============================");
      var childrenAray = [];
      var typename = "";

      var parent_category_ID = createCategoryInput.parent;

      var first_parent = await this.TypesModel.findOne({"_id":createCategoryInput.type.connect});
      var first_parent_category = await this.CategoriesModel.findOne({"name":first_parent.name});
      
      var parentCategory = await this.CategoriesModel.findOne({"name":first_parent.name});
      
      parentCategory.children.forEach(element => {
        if(element.id.toString() == createCategoryInput.parent){
          element.children.forEach(childobject => {
            childrenAray.push(childobject);
            typename = childobject.name;
          });
          
        }
      
      });

      var parentDetails = {
        name : parentCategory.name,
        slug : parentCategory.slug,
        id : parentCategory._id
      }
      var ParentObj = {
        parent : parentDetails
      }

      var x =[];

      var Type_Id = createCategoryInput.type.connect;
      var TypeObj2 = {
        name:parentCategory.name,
        slug:parentCategory.name,
        connect: createCategoryInput.parent
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

      var childforsubcategory = {
        children: []
      }

      var n = Object.assign(createCategoryInput,SlugObject);
      var l = Object.assign(createCategoryInput,IDCategory);
      var m1 = Object.assign(createCategoryInput.type,TypeObj2);
      var o = Object.assign(createCategoryInput.parent,ParentObj);      
      var o2 = Object.assign(createCategoryInput,childforsubcategory);

      childrenAray.push(createCategoryInput);

      x.forEach(element_in_X => {
        if(element_in_X.id.toString() == parent_category_ID){
          // console.log(element_in_X.children)
          // if(element_in_X.children){
          //   element_in_X.children.push(createCategoryInput)
          // }
          // if(!element_in_X.childern){
          //   delete element_in_X.childern
          //   element_in_X.childern = [createCategoryInput]
          // }
          element_in_X.children.push(createCategoryInput)
        }
      });

      // console.log(x)

      // x.push(createCategoryInput);
      var child = {
      children: x
      }
      var testobj = Object.assign(parentCategory,child);

      childrenAray.push(testobj)
      // console.log("??????????????????????????????")
      // console.log(testobj)
      const createcategories = new this.CategoriesModel(testobj);
      createcategories.save();
      return this.categories[0];
    }

    if(createCategoryInput.type.connect)
    {
      
      var Type_Id = createCategoryInput.type.connect;
      var TypeObj1 = await this.TypesModel.findOne({"_id":Type_Id});

      var parentCategory = await this.CategoriesModel.findOne({"name":TypeObj1.name});
      var parentDetails = {
        name : parentCategory.name,
        slug : parentCategory.slug,
        id : parentCategory._id
      }
      var ParentObj = {
        parent : parentDetails
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

      var childforsubcategory = {
        children: []
      }

      var n = Object.assign(createCategoryInput,SlugObject);
      var l = Object.assign(createCategoryInput,IDCategory);
      var m = Object.assign(createCategoryInput.type,TypeObj);
      var o1 = Object.assign(createCategoryInput,ParentObj);
      var o2 = Object.assign(createCategoryInput,childforsubcategory);      
      
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
    // console.log(text, first, page, hasType, parent);
    
    if( hasType  && (parent != null) ){
      // console.log("considition 0");
      return {
        data: queryResult,
        paginatorInfo: paginate(queryResult.length, page, first, queryResult.length),
      };
    }

    if( hasType  && (parent == null)  ){
      // console.log("160");
      queryResult.forEach(element => {
        if(element.type.slug.toLowerCase() == hasType?.value.toLowerCase()){
          if(element.children){
                element.children.forEach(child => {
                  // console.log(child);
                  a.push(child);
                });
          }
          else{
            a.push(element);
          }
        }
      });
      return {
        data: a,
        paginatorInfo: paginate(a.length, page, first, a.length),
      };
    }

    if( hasType  && (parent == null) && text && text != "%%"){ 
      // console.log("160");
      queryResult.forEach(element => {
        if(element.type.slug.toLowerCase() == hasType?.value.toLowerCase()){
          if(element.children){
                element.children.forEach(child => {
                  if ((child.name.toLowerCase()).includes(text.replace(/%/g, '').toLowerCase())){
                    a.push(child);
                  }                  
                });
          }
        }
      });
      return {
        data: a,
        paginatorInfo: paginate(a.length, page, first, a.length),
      };
    }
    
    if(hasType && text == "%%"){
      // console.log("condition 1");
      queryResult.forEach(element => {
        if(element.type.slug.toLowerCase() == hasType?.value.toLowerCase()){
          result.push(element);
        }
      });
      if(!hasType){
        return {
          data: queryResult,
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
      }

      return {
        data: result,
        paginatorInfo: paginate(data.length, page, first, data.length),
      };
    }

    else{      
      // console.log("condition 4"); 
      // // console.log("category test");
      // queryResult.forEach(element => {
      //   if(element.children){
      //     element.children.forEach(child => {
      //       // console.log(child);
      //       a.push(child);
      //     });
          
      //   }
      // });
      return {
        data: queryResult,
        paginatorInfo: paginate(queryResult.length, page, first, queryResult.length),
      };
    }
    
  }

  async getCategory({ id, slug }: GetCategoryArgs): Promise<Category> {
    var Child_Category = {};
    if(id){
      try {
        return await this.CategoriesModel.findOne({"_id":id});
      } 
      catch (error) {
        if (error){
          var All_Categories = await this.CategoriesModel.find();
          var Num = 0;
          All_Categories.forEach(element => {
            
            var child_category_array = element.children;
            child_category_array.forEach(child => {
              
              if (child.id == id){  
                Child_Category = child;
                Num = 1;
              }
            });           
          });
          console.log(Num)

          if(Num == 0){
            All_Categories.forEach(element => {
              element.children?.forEach(childObj => {
                childObj.children?.forEach(sub_sub_category => {
                  console.log(sub_sub_category.id)
                  if (sub_sub_category.id == id){  
                    Child_Category = sub_sub_category;
                  }
                });
              });
            });
          }
          console.log("]]]]][[[[[[")
          console.log(Child_Category)
          return Child_Category;
        }
      }
    }
    
    return await this.CategoriesModel.findOne({slug:slug});;
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    // console.log(id);
    // console.log(updateCategoryInput);
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
          console.log(err);
      }
      else{
          console.log("Deleted User : ", docs);
      }
  });
 //console.log(a);
    return `This action removes a category`;
    // return `This action removes a #${id} category`;
  }
}
