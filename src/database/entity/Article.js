export function createArticle(){
    let query = `        
    CREATE TABLE IF NOT EXISTS article (
        article_id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(150) NOT NULL, 
        content MEDIUMTEXT NOT NULL,
        status VARCHAR(15) DEFAULT 'public',
        upvotes INT NOT NULL DEFAULT 0,
        downvotes INT NOT NULL DEFAULT 0,
    )`;
    connection.query(query,(error)=>{throw error;});
}
