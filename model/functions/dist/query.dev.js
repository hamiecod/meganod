"use strict";

function query(query) {
  connection.query(query, function (error) {
    if (error) {
      console.log(error);
    }
  });
}

module.exports = {
  query: query
};