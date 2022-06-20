import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Injectable()
export class AddressesService {
  create(createAddressInput: CreateAddressInput) {
    console.log("Create address input");
    console.log(createAddressInput);
    return 'This action adds a new address';
  }

  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    console.log("update address input");
    console.log(id);
    console.log(updateAddressInput);
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
