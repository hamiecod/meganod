let executeQuery=require('../functions/query.js');
export function createArchive() {
    let query=`
    CREATE TABLE IF NOT EXISTS archive (
        archive_id INT UNSIGNED PRIMARY KEY,
        title VARCHAR(150),
        content MEDIUMTEXT,
        date_archived DATE
    )
    `;
    executeQuery(query);
}
