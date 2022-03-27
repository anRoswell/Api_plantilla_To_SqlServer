require('dotenv').config()
const parametros = require('./../config/index')
const sql = require('mssql')
const log4js = require('../utils/log4js')()

const config = {
	user: parametros.SqlServer.MSSQL_USERNAME_SQLSERVER,
	password: parametros.SqlServer.MSSQL_PASSWORD_SQLSERVER,
	server: parametros.SqlServer.MSSQL_HOST_SQLSERVER, // You can use 'localhost\\instance' to connect to named instance
	database: parametros.SqlServer.MSSQL_DATABASE_SQLSERVER,
	//requestTimeout:40000,
	pool: {
		max: 100,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // for azure
		trustServerCertificate: true, // change to true for local dev / self-signed certs
	},
}

// run a query against the global connection pool
function createPool() {
	let pool
	try {
		// async/await style:
		console.log(`[MSSQL]: Creamos pool de conexion SqlServer..`)
		pool = new sql.ConnectionPool(config)

		const pool1Connect = pool.connect()

		pool.connect((err) => {
			console.error(err)
		})
		return { pool1Connect, pool }
	} catch (e) {
		log4js.error(`[action: createPool connection-pool-mssql][msg: ${JSON.stringify(e)}][file:${__filename}]`)
		throw new Error('Internal error server')
	}
}

module.exports = {
	createPool,
}