const mysql = require('mysql2');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ordinacija',
}).promise();


module.exports = pool
