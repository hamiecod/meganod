/*
 * defintion: creates an article table in the database that stores the data about the articles posted in the blog.
 * #schema: #title: title of the article
 *   #content: content of the blogs
 *   #status: visibility of the blog, can be 'public','private' or 'unlisted'
 * %requirements:
 *   %query: an internal module used for querying the database
 * @params: null
*/
function createArticle(){
    let query = `        
    CREATE TABLE IF NOT EXISTS article (
        article_id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(150) NOT NULL, 
        content MEDIUMTEXT NOT NULL,
        status VARCHAR(15) DEFAULT 'public',
        date_published DATE NOT NULL
    )`;
    executeQuery.query(query);
}
module.exports={createArticle};
