const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const dbConnect = require('./config/dbConnect');
const Category = require('./models/category.model');
// eslint-disable-next-line no-unused-vars
const Item = require('./models/item.model');

const app = express();

const PORT = 4200;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/v1', async (req, res) => {
  const allCategory = await Category.find().populate('products');
  return res.json(allCategory).status(200);
});

app.post('/api/v1/order', async (req, res) => {
  console.log(req.body);
});

async function start() {
  try {
    await dbConnect();
    app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
  } catch (error) {
    console.log('Server error', error.massage);
    process.exit(1);
  }
}

start();
