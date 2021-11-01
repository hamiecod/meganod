let executeQuery=require('../functions/query.js');
export function createLog(){
    let query=`
    CREATE TABLE IF NOT EXISTS logs (
        message VARCHAR(500),
        time TIMESTAMP
    )`;
    executeQuery(query);
}
