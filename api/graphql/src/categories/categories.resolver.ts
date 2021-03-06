import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import {
  CategoryPaginator,
  GetCategoriesArgs,
} from './dto/get-categories.args';
import { GetCategoryArgs } from './dto/get-category.args';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(@Args('input') createCategoryInput: CreateCategoryInput) {
    console.log("create category input");
    console.log(createCategoryInput);
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => CategoryPaginator, { name: 'categories' })
  async getCategories(
    @Args() getCategoriesArgs: GetCategoriesArgs,
  ): Promise<CategoryPaginator> {
    console.log("line 25+++++++++++++++");
    console.log(getCategoriesArgs);
    return this.categoriesService.getCategories(getCategoriesArgs);
  }

  @Query(() => Category, { name: 'category' })
  async getCategory(
    @Args() getCategoryArgs: GetCategoryArgs,
  ): Promise<Category> {
    console.log("line 34+++++++++++++++");
    console.log(getCategoryArgs)
    return this.categoriesService.getCategory(getCategoryArgs);
  }

  @Mutation(() => Category)
  updateCategory(@Args('input') updateCategoryInput: UpdateCategoryInput) {
    console.log("line 43+++++++++++++++");
    console.log(updateCategoryInput)
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  deleteCategory(@Args('id', { type: () => ID }) id: number) {
    return this.categoriesService.remove(id);
  }
}
