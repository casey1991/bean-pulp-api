import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DriversResolver } from './drivers.resolver';
import { DriversService } from './drivers.service';
import { Driver, DriverSchema } from './schemas/driver.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Driver.name,
        useFactory: () => {
          const schema = DriverSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        },
      },
    ]),
  ],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
