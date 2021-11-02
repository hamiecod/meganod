"use strict";

function connect() {
  var path = require('path');

  require('dotenv').config({
    path: path.join(__dirname, '../../.env')
  });

  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });
  connection.connect(function (error) {
    if (error) {
      console.error("Error connecting to the database: " + error.stack);
      return;
    } // connection confirmation


    console.info('Connected as id ' + connection.threadId);
  });
}

module.exports = {
  connect: connect
};