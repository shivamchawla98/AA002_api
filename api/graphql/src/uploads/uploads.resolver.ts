import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { UploadsService } from './uploads.service';
import { createWriteStream } from 'fs';
import { Upload } from './Uploads';
import { resolve } from 'path';
import { rejects } from 'assert';
import { Attachment } from 'src/common/entities/attachment.entity';


@Resolver()
export class UploadsResolver {
  constructor(private readonly uploadsService: UploadsService) {}


  // @Mutation(() => [Attachment])
  // upload(
  //   @Args({ name: 'attachment', type: () => [GraphQLUpload], nullable: true })
  //   attachment?: FileUpload,
  // ) {
  //   console.log("resolver");
  //   console.log(attachment);
  //   this.uploadsService.upload(attachment);
  //   return [
  //     {
  //       id: '1abc',
  //       original:
  //         'https://www.google.com/photos/about/static/images/ui/logo-photos.png',
  //         // 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/881/aatik-tasneem-7omHUGhhmZ0-unsplash%402x.png',
  //       thumbnail:
  //         'https://www.google.com/photos/about/static/images/ui/logo-photos.png'
  //         // 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/881/conversions/aatik-tasneem-7omHUGhhmZ0-unsplash%402x-thumbnail.jpg',
  //     },
  //   ];
  // }


  // @Mutation(() => Boolean)
  // async upload(
  //   @Args({ name: 'attachment', type: () => [GraphQLUpload], nullable: true })
  //   {
  //     createReadStream,
  //     filename
  //   }:FileUpload) : Promise<boolean>
  // {
  //   return new Promise(async (resolve, reject) => 
  //     createReadStream()
  //       .pipe(createWriteStream(__dirname+`/public/images/${filename}`))
  //       .on('finish',()=>resolve(true))
  //       .on('error',()=>reject(false))
  //   );
  // }

  @Mutation(() => [Attachment])
  async upload (@Args({ name: 'attachment', type: () => [GraphQLUpload]})
  attachment:FileUpload,
  // {
  //   createReadStream,
  //   filename
  // }:FileUpload
  ){
    console.log("--------------Attacgment");
    console.log(attachment);
    var x =await attachment[0]
    console.log(x);
    console.log(x.filename);
    x.createReadStream()
      // .pipe(createWriteStream(`/Uploads/${x.filename}`))
      .pipe(createWriteStream(`C://Users//rahul//OneDrive//Desktop//GraphQl//shop//public//img//${x.filename}`))
    // return new Promise (async (resolve, rejects) =>
    // attachment.createReadStream()
    //   .pipe(createWriteStream(`C:/Users/rahul/OneDrive/Desktop/GraphQl/Image/${attachment.filename}`))
    //   .on("finish", () => resolve(true))
    //   .on("error",()=>rejects(false))
    // );
      var randomString = Math.random().toString(36).slice(2);
    return[
      {
        id: randomString,
        original:
          `http://38.242.199.115:3001/img/${x.filename}`,
        thumbnail:
          `http://localhost:3001/img/${x.filename}`
      }
    ]
  }
}
