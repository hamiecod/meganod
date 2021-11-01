let executeQuery = require('../function/query.js');
export function createArticle(){
    let query = `        
    CREATE TABLE IF NOT EXISTS article (
        article_id INT PRIMARY KEY UNSIGNED AUTO_INCREMENT,
        title VARCHAR(150) NOT NULL, 
        content MEDIUMTEXT NOT NULL,
        status VARCHAR(15) DEFAULT 'public',
        upvotes INT NOT NULL DEFAULT 0 UNSIGNED,
        downvotes INT NOT NULL DEFAULT 0 UNSIGNED,
    )`;
    executeQuery(query);
}
