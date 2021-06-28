const mongoose = require('mongoose');
const { dbConnectionURL, options, DB_NAME } = require('./dbConfig');

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) console.log(err);
    console.log(
      `Database ("${DB_NAME}") has been connected: ${dbConnectionURL}`,
    );
  });
}

module.exports = dbConnect;
