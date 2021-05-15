const { getObjectId } = require('mongo-seeding');
const data = [
  {
    _id: getObjectId('喜盈盈豆粕50KG'),
    name: '喜盈盈豆粕50KG',
    unit: 'KG',
    weight: 50,
  },
];

module.exports = data;
