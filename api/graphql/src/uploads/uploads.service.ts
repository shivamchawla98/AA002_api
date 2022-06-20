import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

import path from 'path';
const {ApolloServer, gql} = require('apollo-server');
const fs = require('fs');

@Injectable()
export class UploadsService {


    // async upload(FileUpload) {
    //     console.log("aaaaa");
    //     console.log(FileUpload);
    //     const {createReadStream, filename, mimetype, encoding} = await FileUpload
        
    //     const stream = createReadStream();
        
    //     const PathName = path.join(`C:/Users/rahul/OneDrive/Desktop/GraphQl/api/sign ritik.jpeg`);
    //     fs.createWriteStream(PathName);
    //     return 'This action adds a new setting';
    //   }


  async upload (@Args({ name: 'attachment', type: () => [GraphQLUpload]})
  attachment:FileUpload,
  {
    createReadStream,
    filename
  }:FileUpload
  ):Promise<boolean>{
    console.log(attachment);
    return new Promise (async (resolve, rejects) =>
    createReadStream()
      .pipe(createWriteStream(__dirname+`C:/Users/rahul/OneDrive/Desktop/GraphQl/Image${filename}`))
      .on("finish", () => resolve(true))
      .on("error",()=>rejects(false))
    );
  }

}
