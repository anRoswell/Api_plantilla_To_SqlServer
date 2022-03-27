const sqlPool = require('./connection-pool-mssql')
const { pool1Connect, pool } = sqlPool.createPool()

//const Message = require('./../utils/messages/message')()
const log4js = require('../utils/log4js')()
require('dotenv').config()

const Execute = (sql, params = []) => {
	// console.log(sql)
	// console.log(params)
	return new Promise(async (resolve, reject) => {
		try {
			//const pool = await sqlPool.createPool()
			await pool1Connect
			const request = pool.request()

			request
				.query(sql)
				.then((result) => {
					resolve(result)
				})
				.catch((e) => {
					reject(e)
				})
		} catch (e) {
			// console.log(e.message)
			log4js.error(`[action: execute Execute][msg: ${JSON.stringify(e)}][file:${__filename}]`)
			reject(e)
		}
	})
}

/**
 * Ejecutamos los Querys con validacion de Inyección Sql
 * @param {*} sql = query
 * @param {*} params = parametros
 */
const ExecuteInyect = (sql, params = []) => {
	console.log(sql)
	console.log(params)
	return new Promise(async (resolve, reject) => {
		try {
			//const pool = await sqlPool.createPool()
			await pool1Connect
			const request = pool.request()

			params.map((object) => {
				for (const property in object) request.input(property, object[property])
			})

			request
				.query(sql)
				.then((result) => {
					resolve(result)
				})
				.catch((e) => {
					reject(e)
				})
		} catch (e) {
			// console.log(e)
			log4js.error(`[action: execute ExecuteInyect][msg: ${JSON.stringify(e)}][file:${__filename}]`)
			reject(e)
		}
	})
}

/**
 * Ejecutamos SP
 * @param {*} params = parametros a enviar
 */
const ExecuteInyectStoreProcedure = (nameSp, params = []) => {
	console.log(nameSp)
	console.log(params)
	return new Promise(async (resolve, reject) => {
		try {
			//const pool = await sqlPool.createPool()
			await pool1Connect
			const request = pool.request()

			if (params.length > 0) {
				params.map((object) => {
					for (const property in object) request.input(property, object[property])
				})
			}

			request
				.execute(nameSp)
				.then((result) => {
					resolve(result)
				})
				.catch((e) => {
					reject(e)
				})
		} catch (e) {
			log4js.error(`[action: execute ExecuteInyectStoreProcedure][msg: ${JSON.stringify(e)}][file:${__filename}]`)
			reject(e)
		}
	})
}

module.exports = {
	Execute,
	ExecuteInyect,
	ExecuteInyectStoreProcedure,
}
