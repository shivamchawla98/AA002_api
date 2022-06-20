import { InputType, PartialType } from '@nestjs/graphql';
import { SettingsOptions } from '../entities/setting.entity';

@InputType()
export class SettingsInput {
  id?:number;
  created_at?:Date;
  updated_at?:Date;
  options: SettingsOptionsInput;
}

@InputType()
export class SettingsOptionsInput extends PartialType(SettingsOptions) {}
