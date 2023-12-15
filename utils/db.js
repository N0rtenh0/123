'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123'
    database:
});

connection.connect(function(err){
    if (err){
        console.log('Error on database connection');
        throw err;
    }
    console.log('database connection active.');
});

module.exports = connection;