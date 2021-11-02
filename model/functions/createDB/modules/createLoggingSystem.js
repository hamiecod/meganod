/*
 * definition: this funciton sets up the logging system for the web app
*/
function createLoggingSystem(){
  let logs=require('../../../logs/Logs');
  let logsTriggers={
    article:{
      inserted:require('../../../logs/triggers/articleInsertTrigger'),
      removed: require('../../../logs/triggers/articleRemoved')
    },
  }
  
  logs.createLog();
  logsTriggers.article.inserted.createArticleInsertTrigger();
  logsTriggers.article.removed.createArticleRemovedTrigger();
}
module.exports={ createLoggingSystem };