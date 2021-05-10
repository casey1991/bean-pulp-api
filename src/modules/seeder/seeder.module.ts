import { Module, OnModuleInit } from '@nestjs/common';
import { Seeder } from 'mongo-seeding';
import * as path from 'path';

@Module({
  imports: [],
  providers: [],
})
export class SeederModule implements OnModuleInit {
  onModuleInit() {
    this.seed();
  }
  async seed() {
    const config = {
      database: {
        name: 'bean-pulp',
      },
      dropDatabase: true,
    };
    const seeder = new Seeder(config);
    const dataPath = path.resolve('./src/modules/seeder/data');
    const collections = seeder.readCollectionsFromPath(dataPath, {
      extensions: ['js', 'json', 'ts'],
      transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
    });
    seeder
      .import(collections)
      .then(() => {
        console.log('Seeding Successful!');
      })
      .catch((err) => {
        console.log('Seeding Error!', err);
      });
  }
}
