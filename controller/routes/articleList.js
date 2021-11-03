const express=require('express');
const app= express.Router();

// this endpoint returns a list of articles along with their description
app.get('/articleList/:quantity', function getArticleList(req, res){
  // the quantity of the articles required
  let quantity=req.params.quantity;

  let query=`
  SELECT article.title, article.date_published, keywords.value
  FROM article
  LEFT JOIN keywords ON article.article_id=keywords.article_id
  WHERE (keywords.name LIKE 'description')
  ORDER BY date_published DESC
  LIMIT ${quantity}
  `;

  let results=executeQuery.select(query);

  if(results===undefined){
      res.status(404).send("The records do not exists");
  }
  else if(results!==undefined){
      res.status(200).send(results);
  }
  else{
      res.status(400).send("This page could not be loaded");
  }
});

module.exports=app;