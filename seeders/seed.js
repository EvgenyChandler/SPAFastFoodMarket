const mongoose = require('mongoose');

const Item = require('../models/item.model');
const Category = require('../models/category.model');
const dbConnect = require('../config/dbConnect');

const itemArr = [
  {
    name: 'Томато Бургер',
    price: 129,
    delivery: true,
  },
  {
    name: 'Чиз Бургер',
    price: 110,
    delivery: true,
  },
  {
    name: 'Гам Бургер',
    price: 60,
    delivery: true,
  },
  {
    name: 'Шеф Бургер',
    price: 200,
    delivery: true,
  },
  {
    name: 'Кинг Бургер',
    price: 500,
    delivery: true,
  },
  {
    name: 'Мастер Бургер',
    price: 1500,
    delivery: false,
  },
  {
    name: 'Твистер',
    price: 100,
    delivery: true,
  },
  {
    name: 'Бокс Твистер',
    price: 300,
    delivery: false,
  },
  {
    name: 'Стрипс (3 шт.)',
    price: 200,
    delivery: true,
  },
  {
    name: 'Стрипс (5 шт.)',
    price: 250,
    delivery: true,
  },
  {
    name: 'Стрипс (20 шт.)',
    price: 500,
    delivery: false,
  },
];

const categoryArr = [
  {
    name: 'Бургеры',
    products: [],
  },
  {
    name: 'Роллы',
    products: [],
  },
  {
    name: 'Курица',
    products: [],
  },
];

async function main() {
  await dbConnect();
  // await Item.create(itemArr);
  // const findBurgers = await Item.find();
  // findBurgers.forEach((el) => {
  //   if (el.name.includes('Бургер')) {
  //     categoryArr[0].products.push(el._id);
  //   }
  //   if (el.name.includes('Твистер')) {
  //     categoryArr[1].products.push(el._id);
  //   }
  //   if (el.name.includes('Стрипс')) {
  //     categoryArr[2].products.push(el._id);
  //   }
  // });
}
main();
