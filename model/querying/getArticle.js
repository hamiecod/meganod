/*
 * definiton: this function fetches the title and content of a specific article id from the article table only if the article is public or unlisted. This function returns a 404 error an article with a particular article id doesn't exist
 * @params:
 *   @req: the request object
 *   @res: the response object
 * %requirements:
 *    %query.select: an internal module function that queries the database
*/
function getArticle(req,res){
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
}
module.exports=getArticle;
