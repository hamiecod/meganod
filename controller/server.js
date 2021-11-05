const express=require('express');
app = express();
let path=require('path')
let cors=require('cors');

// setting up cors
app.use(cors({
    origin: ['http://127.0.0.1:5500','http://localhost:5500']
}));

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

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use('/static', express.static('../views'));

// routes

app.get('/', (req,res)=>{
    res.status(200).render('index.pug');
})
app.get('/dashboard', (req,res)=>{
    res.status(200).render('dashboard.pug');
})
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
        res.status(200).render('article.pug', results[0]);
    } else{
        res.status(400).send('The page could not be loaded');
    }
});
app.get('/articleList/:quantity', (req,res)=>{
    // the quantity of the articles required
    let quantity=req.params.quantity;

    let query=`
    SELECT article.article_id, article.title, article.date_published, tag.value, article.status
    FROM article
    INNER JOIN keywords ON article.article_id=keywords.article_id
    INNER JOIN tag ON keywords.tag_id=tag.tag_id
    WHERE ((tag.name LIKE 'description') AND (article.status<>'private')) OR ((article.article_id>0) AND (article.status<>'private'))
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