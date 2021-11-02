/*
 * definition: this function creates the database system
*/
function createSystem(){
  let modules={
    entities: require('./createEntities'),
    logging: require('./createLoggingSystem'),
    archival: require('./createArchivalSystem')
  }
  modules.entities.createEntities();
  modules.logging.createLoggingSystem();
  modules.archival.createArchivalSystem();
}
module.exports={
  createSystem
}