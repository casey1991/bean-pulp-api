import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RegionsResolver } from './regions.resolver';
import { RegionsService } from './regions.service';
import { Region, RegionSchema } from './schemas/region.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Region.name,
        useFactory: () => {
          const schema = RegionSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        },
      },
    ]),
  ],
  providers: [RegionsService, RegionsResolver],
})
export class RegionsModule {}
