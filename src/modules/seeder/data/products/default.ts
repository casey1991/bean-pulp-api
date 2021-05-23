const { getObjectId } = require('mongo-seeding');
const data = [
  {
    _id: getObjectId('喜盈盈豆粕50KG'),
    name: '喜盈盈豆粕50KG',
    unit: 'KG',
    unit_weight: 50,
    unit_label: '包',
  },
];

module.exports = data;
