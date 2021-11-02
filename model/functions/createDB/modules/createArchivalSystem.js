/*
 * definition: this function creates the archival system of the database
*/
function createArchivalSystem(){
  let archive = require('../../../archive/Archive');
  let archiveTriggers = {
      create: require('../../../archive/triggers/makeArchive')
  };
  let archiveEvents = {
      delete: require('../../../archive/events/deleteArchive')
  };
  
  archive.createArchive();
  archiveTriggers.create.makeArchive();
  archiveEvents.delete.scheduleArchiveDelete();
}

console.log('Database created');
module.exports={
  createArchivalSystem
}