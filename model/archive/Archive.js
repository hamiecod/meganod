/*
 * definition: this function creates an archive table in the database which is used to store the article archives
 * %requirements:
 *    %query: an internal module to query the database
 * #schema:
 *    #archive_id: id of the achived article
 *    #title: title of the archived article
 *    #content: content of the archived article
 *    #status: status of the acrhived article
 *    #date_archived: the date on which the article was archived 
*/
function createArchive() {
    let query=`
    CREATE TABLE IF NOT EXISTS archive (
        archive_id INT UNSIGNED PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        content MEDIUMTEXT NOT NULL,
        status VARCHAR(15),
        date_archived DATE
    )
    `;
    executeQuery.query(query);
}
module.exports={ createArchive };
