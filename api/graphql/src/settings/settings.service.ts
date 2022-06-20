import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { SettingsInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';
import settingsJson from './settings.json';
import {Model} from 'mongoose';
import { Settings_ } from './settings.schema';
import { CreateSettingsInput } from './dto/create-setting.input';


const settings = plainToClass(Setting, settingsJson);

@Injectable()
export class SettingsService {
  private settings: Setting = settings;
  constructor( @InjectModel(Settings_.name) private settingModel:Model<Settings_>){}

  create(createSettingInput: CreateSettingsInput) {
    return 'This action adds a new setting';
  }

  async getSettings() {
    //console.log("get settings")
    var a = await this.settingModel.find();
    var Setting = a[0];
    // console.log(Setting);
    // console.log("########");
    // console.log(this.settings);
    // return await this.settingModel.find();
    // console.log("SETTING (((((((((( ");
    //  console.log(this.settings);
    // return this.settings;
    return Setting;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  async updateSettings(updateSettingsInput: SettingsInput) {
  // console.log("Update settings input");
  // console.log(updateSettingsInput.options.shippingClass);
  //   var SettingsID = {_id:  '627685fded9b233db5ea8e21' };
  var InputObject ={
    shippingClass:'1',
    taxClass:'1'
  }
  var SettingInput =Object.assign(updateSettingsInput.options,InputObject);
    var newValues = SettingInput;
    // console.log("new settings");
    // console.log(newValues);
  //   this.settingModel.findByIdAndUpdate(SettingsID,newValues,{new:true});
  // const createshop = new this.settingModel(updateSettingsInput);
  //   createshop.save();
  // var a = await this.settingModel.findById({"_id":'62794e1e1262b92cd50cf686'});
  // console.log(a);
  const x = await this.settingModel.findOneAndUpdate({"_id":'6281173ec46cb29c5a1c91b4'},updateSettingsInput,{new:true});
  var b = await this.settingModel.find();
  var Setting = b[0];
    return Setting;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
