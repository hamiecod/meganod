/*
 * definition: this function is used to query the MySQL database using mysql2 js driver
 * %requirements:
 *    %mysql2: the driver for mysql using node.js
 *    %mysql connection: this connection to the database using mysql2 is needed to query the database
 * @params:
 *    @query: the SQL statement that needs to be queried from the database
*/
function query(query) {
    connection.query(query, function(error){
        if(error){
            console.log(error);
        }
    });
}
module.exports={query};
