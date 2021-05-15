const { getObjectId } = require('mongo-seeding');
const data = [
  {
    _id: getObjectId('王阳'),
    name: '王阳',
    phones: ['13686462165'],
    type: 'NORMAL',
    location: {
      province: '河南省',
      city: '三门峡市',
      district: '湖滨区',
    },
  },
];

module.exports = data;
