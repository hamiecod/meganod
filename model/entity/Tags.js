/*
 * definition: this function creates a tag table in the database
 * #schema:
 *    #name: the name(title) of the keyword, e.g. 'author'
 *    #value: the value of the tag for the corresponding name
 * %requirements:
 *   %query: an internal module used for querying the database
 * @params: null
*/
function createTag(){
    let query=`
    CREATE TABLE IF NOT EXISTS tag (
        tag_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30),
        value VARCHAR(255),
        INDEX(tag_id)
    )`;
    executeQuery.query(query);
}
module.exports={createTag};
