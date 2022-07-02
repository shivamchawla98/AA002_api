import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateProductInput, RegisterProduct } from './dto/create-product.input';
import { GetProductArgs } from './dto/get-product.args';
import { GetProductsArgs, ProductPaginator } from './dto/get-products.args';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import productsJson from './products.json';
import Fuse from 'fuse.js';
import { paginate } from 'src/common/pagination/paginate';
import { GetPopularProductsArgs } from './dto/get-popular-products.args';
import { Products } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/users/dto/users.dto';
import { Types } from 'src/types/types.schema';
import shopsJson from 'src/shops/shops.json';
import { Shop } from 'src/shops/entities/shop.entity';
import { Categories_ } from 'src/categories/categories.schema';


const products = plainToClass(Product, productsJson);
const shops = plainToClass(Shop, shopsJson);
const options = {
  keys: [
    'name',
    'type.slug',
    'categories.slug',
    'tags.slug',
    'status',
    'author.slug',
    'manufacturer.slug',
  ],
  threshold: 0.3,
};
const fuse = new Fuse(products, options);

@Injectable()
export class ProductsService {
  private products: Product[] = products;
  private shops: Shop[] = shops;
  constructor(@InjectModel(Products.name) private ProductModel: Model<Products>, @InjectModel(Types.name) private TypesModel: Model<Types>, @InjectModel(Categories_.name) private CategoriesModel: Model<Categories_>) { }



  async create(createProductInput: CreateProductInput) {
    // console.log("create==========================");
    // console.log(createProductInput);
    var typeid = createProductInput.type_id;
    //console.log(typeid);
    var TypeValue = await this.TypesModel.findOne({ "_id": typeid });

    var TypeObj = {
      type: TypeValue
    }
    var TypeInput = Object.assign(createProductInput, TypeObj);
    // console.log("#########33")
    // console.log(createProductInput);
    var Slug = createProductInput.name;
    var SlugObject = {
      slug: Slug
    }
    var A = Object.assign(createProductInput, SlugObject);
    var variation_options = {
      id: 1
    }
    var B = Object.assign(createProductInput.variation_options, variation_options);
    var ShopObject = {
      shop: this.shops[0]
    }
    var C = Object.assign(createProductInput, ShopObject);
    var Category = await this.CategoriesModel.findOne({ "_id": createProductInput.categories[0] });
    var CatObj = {
      categories: Category
    }

    var D = Object.assign(createProductInput, CatObj);

    const createproduct = new this.ProductModel(createProductInput);

    createproduct.save();
    return createProductInput;
  }

  async getProducts({
    text,
    first,
    page,
    hasType,
    hasCategories,
    hasTags,
    hasAuthor,
    hasManufacturer,
    status,
    shop_id,
    min_price,
    orderBy,
  }: GetProductsArgs): Promise<ProductPaginator> {
    var v = 0;
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    console.log("{{{{{{{{{{{}}}}}}}}}}}}");
    console.log(hasType);
    let data: Product[] = await this.ProductModel.find();
    // console.log("data");
    // console.log(data);
    // console.log("dataend")
    // console.log(text);
    var productSearchResult = [];
    if (text && text!="%%") {
      data.forEach(product => {
        var checkTypeSlug = (product.slug.toLowerCase()).includes(text.replace(/%/g, '').toLowerCase())
        if (checkTypeSlug == true) {
          productSearchResult.push(product);
        }
      });

      if (orderBy) {
        if (orderBy[0].column == 'CREATED_AT') {
          productSearchResult.sort((a, b) => {
            return a.sale_price - b.sale_price;
          });
          return {
            data: productSearchResult,
            paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
          };
        }

        if (orderBy[0].order == 'desc') {
          productSearchResult.sort((a, b) => {
            return b.sale_price - a.sale_price;
          });
        }
        if (orderBy[0].order == 'asc') {
          productSearchResult.sort((a, b) => {
            return a.sale_price - b.sale_price;
          });
        }
      }

      return {
        data: productSearchResult,
        paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
      };
    }
    // console.log("has type loging@@@@@@@@@@@D2@@@@@@@@@")
    // console.log(hasType);
    if (hasType) {
      if (hasType.value != 'Products') {
        // console.log("line 150");
        data.forEach(product => {
          // var checkCategorySlug = (product.categories.slug.toLowerCase()).includes(hasCategories.value[0].replace(/%/g,'').toLowerCase())
          var checkCategorySlug = (product.categories.slug.toLowerCase()).includes(hasType.value.toLowerCase())
          if (checkCategorySlug == true) {
            productSearchResult.push(product);
          }
        });

        if (orderBy) {
          if (orderBy[0].order == 'desc') {
            productSearchResult.sort((a, b) => {
              return b.sale_price - a.sale_price;
            });
          }
          if (orderBy[0].order == 'asc') {
            productSearchResult.sort((a, b) => {
              return a.sale_price - b.sale_price;
            });
          }
        }

        return {
          data: productSearchResult,
          paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
        };
      }
    }

    if (min_price) {
      data.forEach(product => {
        if (product.sale_price >= min_price.from) {
          if (product.sale_price <= min_price.to) {
            // console.log("{{{{{{{{{{{{{{{{{{{{");
            // console.log(productSearchResult);
            productSearchResult.push(product);
          }
        }
      });

      if (orderBy) {
        if (orderBy[0].column == 'CREATED_AT') {
          productSearchResult.sort((a, b) => {
            return a.sale_price - b.sale_price;
          });
          // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          // console.log(productSearchResult);
          return {
            data: productSearchResult,
            paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
          };
        }
      }

      if (orderBy) {
        if (orderBy[0].order == 'asc') {
          productSearchResult.sort((a, b) => {
            return a.sale_price - b.sale_price;
          });
          return {
            data: productSearchResult,
            paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
          };
        }
        if (orderBy[0].order == 'desc') {
          productSearchResult.sort((a, b) => {
            return b.sale_price - a.sale_price;
          });
          return {
            data: productSearchResult,
            paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
          };
        }
      }
    }

    if (orderBy) {
      if (orderBy[0].column == 'MIN_PRICE') {
        if (orderBy[0].order == 'asc') {
          data.sort((a, b) => {
            return a.sale_price - b.sale_price;
          });
          return {
            data: data,
            paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
          };
        }
        if (orderBy[0].order == 'desc') {
          data.sort((a, b) => {
            return b.sale_price - a.sale_price;
          });
          return {
            data: data,
            paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
          };
        }
      }
    }



    if (!text) {
      // console.log("Return from not text");
      data.sort((a, b) => {
        return a.sale_price - b.sale_price;
      });
      return {
        data: data,
        paginatorInfo: paginate(data.length, page, first, data.length),
      };
    }

    if(hasCategories){
      var category_name = hasCategories.value[0];
      // console.log("category");
      // console.log(category_name);
      data.forEach(product => {
        // var checkCategorySlug = (product.categories.slug.toLowerCase()).includes(hasCategories.value[0].replace(/%/g,'').toLowerCase())
        var checkCategorySlug = (product.categories.slug.toLowerCase()).includes(category_name.toLowerCase())
        if (checkCategorySlug == true) {
          productSearchResult.push(product);
        }
      });
      return {
        data: productSearchResult,
        paginatorInfo: paginate(productSearchResult.length, page, first, productSearchResult.length),
      };

    }

    else{
      return {
        data: data,
        paginatorInfo: paginate(data.length, page, first, data.length),
      };
    }
  }

  async getProduct({ id, slug }: GetProductArgs): Promise<Product> {
    // console.log("id#####");
    // console.log(id);
    if (id) {
      // return this.products.find((p) => p.id === Number(id));
      var ID_ = { "_id": id };
      // console.log(a)
      // console.log(await this.ProductModel.findOne(ID_));
      return await this.ProductModel.findOne(ID_);

    }
    if (slug) {
      // console.log(await this.ProductModel.findOne({"slug":slug}));
      return await this.ProductModel.findOne({ "slug": slug });
    }

  }

  async getRelatedProducts({ id, slug }: GetProductArgs): Promise<Product[]> {
    var selectedProducts = [];

    var related_Products_result = await this.ProductModel.find();
    // console.log("related_Products_result ###################");
    // console.log(related_Products_result);
    if (slug) {
      related_Products_result.forEach(product => {
        var checkCategory = (product.categories.slug.toLowerCase()).includes(slug.toLowerCase())
        if (checkCategory == true) {
          selectedProducts.push(product);
        }
      });
    }
    // console.log(selectedProducts);
    return selectedProducts.slice(0, 10);
  }

  async getPopularProducts({ limit, type_slug }: GetPopularProductsArgs): Promise<Product[]> {
    // let data: Product[] = this.products;

    let data: Product[] = await this.ProductModel.find();


    // console.log("*****************DATA");

    // console.log(data.length);
    return data.slice(0, 8);
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    // console.log(id);
    var ProductId = { "_id": id };
    var newValues = updateProductInput;
    var variation_options = {
      id: 1
    }

    var Category = await this.CategoriesModel.findOne({ "_id": newValues.categories[0] });
    var CatObj = {
      categories: Category
    }

    var D = Object.assign(newValues, CatObj);

    var B = Object.assign(newValues.variation_options, variation_options);
    //  console.log(ProductId);
    //  console.log(newValues);
    // this.ProductModel.findByIdAndUpdate({name:"One Plus 1+"},{slug: "CCC"},{upsert:true});
    // console.log(await this.ProductModel.findOne(a));
    // return await this.ProductModel.findOne(a);
    // console.log(await this.ProductModel.findById({"_id":  id }));
    // this.ProductModel.findByIdAndUpdate({"_id":  id},{},{})
    // return await this.ProductModel.findOne({"_id":  id });
    return await this.ProductModel.findByIdAndUpdate(ProductId, newValues, { new: true })
  }
  async remove(id: number) {
    var ProductId = { "_id": id };
    var deletedProduct = await this.ProductModel.findOne(ProductId);
    //this.ShippingModel.findOneAndRemove(ShippingId,{new:true})
    this.ProductModel.findOneAndDelete((ProductId), function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Deleted User : ", docs);
      }
    });
    //console.log(a);
    return deletedProduct;

  }
}
