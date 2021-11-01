let executeQuery = require('../function/query.js');
export function createComment(){
    let query=`
    CREATE TABLE IF NOT EXISTS comment (
        comment_id INT PRIMARY KEY AUTO_INCREMENT UNSIGNED,
        commentor VARCHAR(30),
        comment VARCHAR(1000),
        comment_date TIMESTAMP,
        article_id,
        FOREIGN KEY article id REFERENCES article(article_id) ON DELETE CASCADE ON UPDATE CASCADE
    )`;
    executeQuery(query);
}
