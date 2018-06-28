require('dotenv').config();

var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: process.env.PORT || 3306,
        user: 'root',
        password: process.env.DB_PASSWD,
        database: 'burgers_db'
    });
}

connection.connect((err) => {
    if (err) {
        console.log('Connection failure ' + err);
        return;
    } else {
        console.log('Connected as thread ' + connection.threadId);
    }
});

module.exports = connection;