export function query(query, errorHandler="throw error") {
    connection.query(query, (error)=>{errorHandler});
}
