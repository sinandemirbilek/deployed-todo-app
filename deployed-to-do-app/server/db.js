const Pool = require('pg').Pool
//require('dotenv').config()

const pool = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: '5432',
  database: 'newtodoapp'
})

module.exports = pool