const mongoose = require('mongoose');

const Item = require('../models/item.model');
const Category = require('../models/category.model');
const dbConnect = require('../config/dbConnect');

async function main() {
  await dbConnect()
}
