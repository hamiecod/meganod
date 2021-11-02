/*
 * definition: this function creates the entities of the database
*/
function createEntities(){
  // functions to create entities
  let article = require('../../../entity/Article');
  let tag = require('../../../entity/Tags');
  let keyword = require('../../../entity/Keywords');

  article.createArticle();
  tag.createTag();
  keyword.createKeywords();
}
module.exports={
  createEntities
}