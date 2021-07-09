const mongoose = require('mongoose');
const { dbConnectionURL, options, DB_NAME } = require('./dbConfig');

function dbConnect() {
  mongoose.connect('mongodb+srv://fastfoodmarket:fastfood123@cluster0.gxpjo.mongodb.net/fastFoodMarketDB?retryWrites=true&w=majority', options, (err) => {
    if (err) console.log(err);
    console.log(
      `Database ("${DB_NAME}") has been connected: ${dbConnectionURL}`,
    );
  });
}

module.exports = dbConnect;
