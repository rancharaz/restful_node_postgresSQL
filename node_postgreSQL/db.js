//database connnection

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "employee_info",
    password: "admin",
    port: 5432
})

module.exports = pool;