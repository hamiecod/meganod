/*
 * definiton: this function connects the node.js process to the MySQL database using mysql2 js(https://github.com/sidorares/node-mysql2) driver
 * %requirements: mysql2(https://github.com/sidorares/node-mysql2), path(https://nodejs.org/api/path.html), dotenv, .env file
 *   %path: needed to define the path to the .env file
 *   %mysql2: needed as a driver to connect to mysql
 *   %dotenv: needed for accessing the .env file
 *   %.env: the file should have the following enteries: DB_HOST(hostname), DB_USERNAME, DB_PASSWORD, DB_NAME(name of database), DB_PORT(port of the database)
 * @params: null
*/
function connect(){
    let path = require('path');
    require('dotenv').config({
        path: path.join(__dirname, '../../.env')
    });
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });
    connection.connect((error)=>{
        if (error){
            console.error("Error connecting to the database: "+ error.stack);
            return;
        }

        // connection confirmation
        console.info('Connected to the database');
    });
}
module.exports={connect};
