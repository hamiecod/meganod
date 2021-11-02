/*
 * definition: this associative entity stores the particular meta tags for particular articles
 * #schema:
 *   #article_id: the id of the article to which the keywords correspond to
 *   #name: name of the keyword, like 'author'
 *   #value: value of the particular keyword, e.g. 'hamiecod'
 * %requirements:
 *   %query: an internal module used for querying the database
 * @params: null
*/
function createKeywords() {
  let query=`
  CREATE TABLE IF NOT EXISTS keywords (
    article_id INT,
    name VARCHAR(30),
    value VARCHAR(255),
    PRIMARY KEY(article_id, name, value),
    FOREIGN KEY (article_id) REFERENCES article(article_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (name) REFERENCES tag(name) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (value) REFERENCES tag(value) ON DELETE CASCADE ON UPDATE CASCADE
  )`;
  executeQuery.query(query);
}
module.exports = { createKeywords };
