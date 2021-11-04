/*
 * definition: this function queries the database for the title, publishing data and the description of n number of articles where n is specified by the requester
 * @params:
 *    @req: the request object
 *    @res: the response object
 * %requirements:
 *    %query.select: an internal module function for querying the database
*/
function getArticleList(req,res){
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
}
module.exports=getArticleList;