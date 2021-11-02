/*
 * definition: inserts the deleted articles as archives into the archive table
 * %requirements:
 *    %query: an internal module used to query the database
 * @params: null
*/
function makeArchive(){
    let query=`
    CREATE TRIGGER make_archive
    BEFORE DELETE
    ON article
    FOR EACH ROW BEGIN
        INSERT INTO archive VALUES(OLD.article_id, OLD.title, OLD.content, OLD.status, CURRENT_DATE());
    END;
    `;
    executeQuery.query(query);
}
module.exports={ makeArchive };
