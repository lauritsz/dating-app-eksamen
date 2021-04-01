var Connection = require('tedious').Connection;
var Request = require('tedious').Request

const config = require('./config.json')
var connection = new Connection(config)

connection.on('connect', function(err){
    if (err){
        console.log(err);
    } else {
        console.log("connected");
        //executeSQL();
        selectData();
    }
});

function executeSQL(){
    request = new Request("INSERT INTO customer (customerID, FirstName) VALUES (1, 'Mogens')", function(err){
    if (err){
        console.log(err)}})

    connection.execSql(request)
};

function selectData(){
    request = new Request("SELECT * FROM customer", function(err){
    if (err){
        console.log(err)}})

    connection.execSql(request)
    console.log(request.on('row', function(columns) {
        for(let i = 0; i < columns.length; i++) {
            console.log(columns[i].value);
        }
    }));
};

connection.connect()
