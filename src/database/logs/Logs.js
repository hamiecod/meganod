export function createLog(){
    let query=`
    CREATE TABLE IF NOT EXISTS logs (
        message VARCHAR(500),
        time TIMESTAMP
    )`;
    connection(query, (error)=>{throw error;});
}
