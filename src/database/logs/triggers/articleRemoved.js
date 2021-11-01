export function articleRemovedTrigger(){
    let query=`
    DELIMITER $$
    CREATE TRIGGER article_removed
    ON article
    BEFORE DELETE
    FOR EACH ROW BEGIN
        INSERT INTO logs VALUES(CONCAT("Deleted an article titled ", OLD.title), CURRENT_TIMESTAMP());
    END$$
    DELIMITER ;
    `;
    connection.query(query, (error)=>{throw error});
}
