import { registerEnumType } from '@nestjs/graphql';

export enum RegionLevel {
  COUNTRY = 'COUNTRY',
  PROVINCE = 'PROVINCE',
  CITY = 'CITY',
  DISTRICT = 'DISTRICT',
  STREET = 'STREET',
}

registerEnumType(RegionLevel, {
  name: 'RegionLevel',
});
