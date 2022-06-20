import { Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { ImportsService } from './imports.service';
import { GraphQLUpload } from 'graphql-upload';
import { ImportInput } from './dto/create-import.input';
import { createReadStream, readFile, ReadStream } from 'fs';
import { createWriteStream } from 'fs';
const csvParser = require('csv-parser');
// import { ImportInput } from './dto/create-import.input';

@Resolver()
export class ImportsResolver {
  constructor(private readonly importsService: ImportsService) {}

  @Mutation(() => Boolean)
  importAttributes(
    @Args('shop_id', { type: () => ID }) shop_id: number,
    @Args('csv', { type: () => GraphQLUpload }) csv: GraphQLUpload,
  ) {
    console.log("&&&&&&&&&&&&&LINE 15");
    console.log(shop_id, csv);
    return true;
  }
  @Mutation(() => Boolean)
  importProducts(
    @Args('shop_id', { type: () => ID }) shop_id: number,
    @Args('csv', { type: () => GraphQLUpload }) csv: GraphQLUpload,
  ) {
    // console.log("&&&&&&&&&&&&&LINE 24");
    // console.log(shop_id, csv);
    // console.log(csv.createReadStream);

    csv.createReadStream()
      // .pipe(createWriteStream(`/Uploads/${x.filename}`))
      // .pipe(createWriteStream(`C://Users//rahul//OneDrive//Desktop//GraphQl//shop//public//img//${csv.filename}`))
      .pipe(csvParser())
      .on('data', (row) => {
        // console.log(row);
        if(row){
          // console.log(row);
          this.importsService.create(row);
        }
        
    })


    

    // csv.createReadStream().pipe(ReadStream(csv));
    
    return true;
  }
  @Mutation(() => Boolean)
  importVariationOptions(
    @Args('shop_id', { type: () => ID }) shop_id: number,
    @Args('csv', { type: () => GraphQLUpload }) csv: GraphQLUpload,
  ) {
    console.log("&&&&&&&&&&&&&LINE 33");
    console.log(shop_id, csv);
    return true;
  }
}
