let executeQuery=require('../../functions/query.js');
export function commentRemoved(){
    let query=`
    DELIMITER $$
    CREATE TRIGGER comment_removed
    ON comment
    AFTER DELETE
    FOR EACH ROW BEGIN
        INSERT INTO logs VALUES("Removed a comment", CURRENT_TIMESTAMP);
    END$$
    DELIMITER ;
    `;
    executeQuery(query);
}
