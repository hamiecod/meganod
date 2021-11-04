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
    tag_id INT,
    PRIMARY KEY(article_id, tag_id),
    FOREIGN KEY (article_id) REFERENCES article(article_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tag(tag_id) ON DELETE CASCADE ON UPDATE CASCADE
  )`;
  executeQuery.query(query);
}
module.exports = { createKeywords };
