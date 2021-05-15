const { getObjectId } = require('mongo-seeding');
const contracts = [
  {
    _id: getObjectId('202102090001'),
    number: '202102090001',
    items: [
      {
        quantity: 1000,
        remain: 998,
        product: getObjectId('喜盈盈豆粕50KG'),
        unit_price: 193,
        currency: 'CNY',
      },
    ],
  },
];

module.exports = contracts;
