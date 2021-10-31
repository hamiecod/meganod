export function createTag(){
    let query=`
    CREATE TABLE IF NOT EXISTS tag (
        name VARCHAR(30),
        value VARCHAR(255),
        PRIMARY KEY(name, value)
    )`;
    connection.query(query, error=>{throw error;});
}
