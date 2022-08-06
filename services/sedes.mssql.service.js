'use strict'
/**
 * @name SaldoCtaContrato
 * @type function
 * @description Función encargada de realizar la consulta con Sequelize
 * @author Alfonso Navarro <alfonso.navarron@syspotec.com>
 */

const Queries = require('./../db/queries')
const mensajes = require('../utils/messages/message')
const log4js = require('../utils/log4js')()

const getSedes = async () => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spSedes]', [{ action: 4 }])
		return recordset
	} catch (e) {
		log4js.error(`[action: sedes metodo: getSee][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const searchSedeById = async (id) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spSedes]', [{ action: 2, id }])
		return recordset
	} catch (e) {
		log4js.error(`[action: profesiones metodo: getProfesiones][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const createSede = async (data) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spSedes]', [{ action: 1, ...data }])
		return recordset
	} catch (error) {
		log4js.error(`[action: sedes.mssql.service metodo: createSede][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const updateSede = async (data, id) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spSedes]', [{ action: 2, ...data, id }])
		return recordset
	} catch (e) {
		log4js.error(`[action: updateSede metodo: updateSede][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const deleteSede = async (id) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spSedes]', [{ action: 3, id }])
		return recordset
	} catch (e) {
		log4js.error(`[action: deleteSede metodo: deleteSede][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

module.exports = {
	getSedes,
	createSede,
	searchSedeById,
	updateSede,
	deleteSede,
}
