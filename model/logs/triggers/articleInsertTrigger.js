/*
 * definition: creates a trigger that inserts a message in the logs whenever a new article is added
 * %requirements:
 *   %query: an internal module used for querying the database
 * @params: null
*/
function createArticleInsertTrigger() {
    let query=`
    CREATE TRIGGER record_inserted
    AFTER INSERT
    ON article
    FOR EACH ROW 
    BEGIN
        INSERT INTO logs VALUES(CONCAT('Added an article titled "', NEW.title, '"'), CURRENT_TIMESTAMP());
    END
    `;
    executeQuery.query(query);
}
module.exports={createArticleInsertTrigger};
