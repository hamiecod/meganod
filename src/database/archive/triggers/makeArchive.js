let executeQuery=require('../../functions/query.js');
export function makeArchive(){
    let query=`
    DELIMITER $$
    CREATE TRIGGER make_archive
    BEFORE DELETE
    ON article
    FOR EACH ROW BEGIN
        INSERT INTO archive VALUES(OLD.article_id, OLD.title, OLD.content, CURRENT_DATE());
    END$$
    DELIMITER ;
    `;
    executeQuery(query);
}
