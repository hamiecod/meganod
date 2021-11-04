const express=require('express');
const app= express.Router();

let getArticleList = require('../../model/querying/getArticleList')

// this endpoint returns a list of articles along with their description
app.get('/articleList/:quantity', getArticleList, req, res);

module.exports=app;