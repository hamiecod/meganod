const express=require('express');
const app=express.Router();

// module for querying the database
let getArticle = require('../../model/querying/getArticle');

// this endpoint returns the article title and content
app.get('/article/:id', getArticle(req,res));

module.exports=app;