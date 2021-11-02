/*
 * definition: creates the logs table in the database
 * #schema: 
 *   #message: the log message
 *   #time: the time at which the particular log was inserted 
 * %requirements:
 *   %query: an internal module used for querying the database
 * @params: null
*/
function createLog(){
    let query=`
    CREATE TABLE IF NOT EXISTS logs (
        message VARCHAR(500),
        time TIMESTAMP
    )`;
    executeQuery.query(query);
}
module.exports={createLog};
