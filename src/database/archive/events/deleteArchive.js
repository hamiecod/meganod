let executeQuery=require('../../functions/query.js');
export function scheduleArchiveDelete(){
    let query=`
    DELIMITER $$
    CREATE EVENT clear_archive
        ON SCHEDULE
            EVERY 3 DAYS
        COMMENT 'Clears out 90-day old archives in every 3 days'
        DO
            DELETE FROM archive
            WHERE date_archived<(CURRENT_TIMESTAMP - INTERVAL 3 MONTH);
    DELIMITER ;
    `;
    executeQuery(query);
}
