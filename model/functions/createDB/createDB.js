// required by submodules
mysql=require('mysql2');

// module used to connect to the database
let connectDB=require('../connectDB');
connectDB.connect();

// module used to query; required by submodules
executeQuery=require('../query');

// module used for creating the database system
let system=require('./modules/createSystem');
system.createSystem();
connection.end();