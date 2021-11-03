const express=require('express');
const app=express.Router();

// module for querying the database
let getArticle = require('../../model/querying/getArticle');

// this endpoint returns the article title and content
// app.get('/article/:id', getArticle(req,res));
app.get('/article/:id', (req,res)=>{
  var data;
  // the id requested
  let articleId=req.params.id;
  
  let query=`
  SELECT title, content
  FROM article
  WHERE (article_id=${articleId}) AND (status IN ('public','unlisted'))
  `;
  
  let results = executeQuery.select(query);

  if(results===undefined){
    res.status(404).send('This page does not exist');
  } else if(results!==(undefined || null)){
    res.status(200).send(results);
  } else{
    res.status(400).send('The page could not be loaded');
  }
});

module.exports=app;