let executeQuery=require('../functions/query.js');
export function createKeywords(){
    let query=`
    CREATE TABLE IF NOT EXISTS keyword (
        article_id,
        name,
        value,
        PRIMARY KEY(article_id, name, value),
        FOREIGN KEY article_id REFERENCES article(article_id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY name REFERENCES tag(name) ON DELETE SET NULL ON UPDATE CASCADE,
        FOREIGN KEY value REFERENCES tag(value) ON DELETE CASCADE ON UPDATE CASCADE
    )`;
    executeQuery(query);
}
