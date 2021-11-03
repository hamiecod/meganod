const express=require('express');
app = express();

// needed for database querying
executeQuery=require('../model/functions/query')
mysql=require('mysql2');
connectDB=require('../model/functions/connectDB');

// required for the listen function
let listen=require('./modules/listen');
require('dotenv').config({
    path: '../.env'
});

// connecting to the db
connectDB.connect();

// routes
let article = require('./routes/article');
let articleList = require('./routes/articleList');

app.get('/article/:id', (req,res)=>{
    // the id requested
    let articleId=req.params.id;
    
    let query=`
    SELECT title, content
    FROM article
    WHERE (article_id=${articleId}) AND (status IN ('public','unlisted'))
    `;
    
    var data;
    let results = executeQuery.select(query);

    if(results===undefined){
        res.status(404).send('This page does not exist');
    } else if(results!==(undefined || null)){
        res.status(200).send(results);
    } else{
        res.status(400).send('The page could not be loaded');
    }
});
app.get('/articleList/:quantity', (req,res)=>{
    // the quantity of the articles required
    let quantity=req.params.quantity;

    let query=`
    SELECT article.title, article.date_published, keywords.value
    FROM article
    LEFT JOIN keywords ON article.article_id=keywords.article_id
    WHERE (keywords.name LIKE 'description') OR article.article_id>0
    ORDER BY date_published DESC
    LIMIT ${quantity}
    `;

    var data;
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

listen(process.env.API_PORT, process.env.API_HOST);