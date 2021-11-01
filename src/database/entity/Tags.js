let executeQuery=require('../functions/query.js');
export function createTag(){
    let query=`
    CREATE TABLE IF NOT EXISTS tag (
        name VARCHAR(30),
        value VARCHAR(255),
        PRIMARY KEY(name, value)
    )`;
    executeQuery(query);
}
