/*
 * definition: this function deletes 90 day old archived articles scheduled every week
 * %requirements:
 *    %query: an internal module used to query the database
 * @params: null
*/
function scheduleArchiveDelete(){
    let query=`
    CREATE EVENT clear_archive
        ON SCHEDULE EVERY 1 WEEK
        COMMENT "Clears out 90-day old archives every week"
        DO BEGIN
            DELETE FROM archive WHERE date_archived<(CURRENT_TIMESTAMP - INTERVAL 3 MONTH);
        END;
    `;
    executeQuery.query(query);
}
module.exports={ scheduleArchiveDelete };
