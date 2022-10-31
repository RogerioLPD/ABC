const pg = require('pg')

const cliente = new pg.Client({
    user: "postgres",
    password: "1008",
    host: "localhost",
    port: 5432,
    database: "abc"
}) 

module.exports = cliente
