import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { RegionsService } from './regions.service';
import { RegionInput } from './dto/create.region.dto';
import { QueryRegionsDto } from './dto/query.regions.dto';
import { PaginatedRegion } from './models/paginated.region';
import { Region } from './schemas/region.schema';
import { RegionsInput } from './dto/insert.regions.dto';

@Resolver((of) => Region)
export class RegionsResolver {
  constructor(private readonly service: RegionsService) {}
  @Query((returns) => Region)
  async region(@Args('id') id: string): Promise<Region> {
    return this.service.findById(id);
  }
  @Query((returns) => PaginatedRegion)
  async regions(@Args() args: QueryRegionsDto): Promise<PaginatedRegion> {
    let querys: Record<string, any> = {};
    if (args.keywords) {
      querys.$or = [
        { name: { $regex: args.keywords } },
        { level: { $in: args.keywords } },
      ];
    }
    const results = await this.service.findAll(querys, {
      offset: args.offset,
      limit: args.limit,
    });
    return {
      nodes: results.docs,
      totalCount: results.totalDocs,
      hasNextPage: results.hasNextPage,
      totalPages: results.totalPages,
    };
  }
  @Mutation((returns) => Region)
  async createRegion(@Args('regionInput') args: RegionInput) {
    return this.service.create(args);
  }
  @Mutation((returns) => PaginatedRegion)
  async insertRegions(@Args('regionsInput') args: RegionsInput) {
    return [];
  }
  @ResolveField('parent', (returns) => Region, { nullable: true })
  async getParent(@Parent() parent: Region) {
    const result = await this.service.findById(parent.parent);
    return result;
  }
  @ResolveField('children', (returns) => [Region], { defaultValue: [] })
  async getChildren(@Parent() parent: Region) {
    const results = await this.service.findByIds(parent.children);
    return results;
  }
}
