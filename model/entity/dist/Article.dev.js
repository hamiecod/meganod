"use strict";

function createArticle() {
  var query = "        \n    CREATE TABLE IF NOT EXISTS article (\n        article_id INT PRIMARY KEY AUTO_INCREMENT,\n        title VARCHAR(150) NOT NULL, \n        content MEDIUMTEXT NOT NULL,\n        status VARCHAR(15) DEFAULT 'public',\n    )";
  executeQuery.query(query);
}

module.exports = {
  createArticle: createArticle
};