const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'Leo',
    password: 'Kirarully05',
    database: 'OrganizerApp'
})

module.exports = {
    connection
}