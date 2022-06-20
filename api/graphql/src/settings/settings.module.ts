import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsResolver } from './settings.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsSchema, Settings_ } from './settings.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Settings_.name, schema: SettingsSchema}])],

  providers: [SettingsResolver, SettingsService]
})
export class SettingsModule {}
