const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '77583094',
    database: 'organizerapp'
})

// gestión de promesa propia
const query = (sql, data) => {
    const myPromise = new Promise((resolve, reject) => {
        connection.query(sql, data, (error, result) => { //exitoso, fracaso
            if (!!error) {
                console.log(error);
                return reject({
                    error: true,
                    message:error.selMessage
                })
            }else{
                return resolve(result)
            }     
        })       
    });

    return myPromise
}

module.exports = {
    connection, 
    query
}