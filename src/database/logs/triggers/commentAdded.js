export function commentAdded(){
    let query=`
    DELIMITER $$
    CREATE TRIGGER comment_added
    ON comment
    AFTER INSERT
    FOR EACH ROW BEGIN
        INSERT INTO logs VALUES("Added a comment", CURRENT_TIMESTAMP);
    END$$
    DELIMITER ;
    `;
    connection.query(query, (error)=>{throw error});
}
