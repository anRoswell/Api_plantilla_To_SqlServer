require('dotenv').config()

module.exports = {
	// Seed database on startup
	seedDB: false,
	SqlServer: {
		MSSQL_USERNAME_SQLSERVER: process.env.MSSQL_USERNAME_SQLSERVER_DEVELOPMENT,
		MSSQL_PASSWORD_SQLSERVER: process.env.MSSQL_PASSWORD_SQLSERVER_DEVELOPMENT,
		MSSQL_DATABASE_SQLSERVER: process.env.MSSQL_DATABASE_SQLSERVER_DEVELOPMENT,
		MSSQL_HOST_SQLSERVER: process.env.MSSQL_HOST_SQLSERVER_DEVELOPMENT,
	},
	mail: {
		user: process.env.MAILUSER,
		password: process.env.MAILPASSWORD,
	},
	oracle: {
		user: process.env.ORACLE_USER_DEVELOPER,
		password: process.env.ORACLE_PASSWORD_DEVELOPER,
		stringConexion: process.env.ORACLE_USER_STRING_CONEXION_DEVELOPER,
	},
	UrlApiFS: process.env.URL_API_FILE_SERVER,
}
