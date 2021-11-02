/*
 * definition: inserts a message to the logs whenever an article is deleted
 * %requirements:
 *   %query: an internal module used for querying the database
 * @params: null
*/
function createArticleRemovedTrigger(){
    let query=`
    CREATE TRIGGER article_removed
    BEFORE DELETE
    ON article
    FOR EACH ROW BEGIN
        INSERT INTO logs VALUES(CONCAT('Deleted an article titled "', OLD.title, '"'), CURRENT_TIMESTAMP());
    END
    `;
    executeQuery.query(query);
}
module.exports={createArticleRemovedTrigger};
