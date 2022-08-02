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

const getEmpresa = async () => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spEmpresas]', [{ accion: 4 }])
		return recordset
	} catch (e) {
		log4js.error(`[action: empresa metodo: getSee][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const createEmpresa = async (data) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spEmpresas]', [{ accion: 1, ...data }])
		return recordset
	} catch (error) {
		log4js.error(`[action: empresas.mssql.service metodo: createEmpresa][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const updateEmpresa = async (data, id) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spEmpresas]', [{ accion: 2, ...data, id }])
		return recordset
	} catch (e) {
		log4js.error(`[action: updateEmpresa metodo: updateEmpresa][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const deleteEmpresa = async (id) => {
	try {
		const { recordset } = await Queries.querySP('[csc].[spEmpresas]', [{ accion: 3, id }])
		return recordset
	} catch (e) {
		log4js.error(`[action: deleteEmpresas metodo: deleteSede][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

module.exports = {
	getEmpresa,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa,	
}
