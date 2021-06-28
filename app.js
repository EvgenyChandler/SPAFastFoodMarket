const express = require('express');
const morgan = require('morgan');
const dbConnect = require('./config/dbConnect');

const app = express();

const PORT = 4200;

app.use(morgan('dev'));
app.use(express.json());

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
