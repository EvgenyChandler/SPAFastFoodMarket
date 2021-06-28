const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: String,
  products: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
});

const Category = model('Category', categorySchema);

module.exports = Category;
