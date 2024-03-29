'use strict'
/**
 * @name SaldoCtaContrato
 * @type function
 * @description Función encargada de realizar la consulta con Sequelize
 * @author Alfonso Navarro <alfonso.navarron@syspotec.com>
 */

const Queries = require('../db/queries')
const mensajes = require('../utils/messages/message')
const log4js = require('../utils/log4js')()

const initialParameters = async () => {
	try {
		const profesiones = await Queries.querySP('[csc].[spProfesiones]', [{ action: 4 }])
		const empresas = await Queries.querySP('[csc].[spEmpresas]', [{ action: 4 }])
		const sedes = await Queries.querySP('[csc].[spSedes]', [{ action: 4 }])
		const profesionales = await Queries.querySP('[ope].[spProfesionales]', [{ action: 2 }])
		return {
			profesiones: profesiones.recordset,
			empresas: empresas.recordset,
			sedes: sedes.recordset,
			profesionales: profesionales.recordset,
		}
	} catch (e) {
		log4js.error(`[action: operation metodo: initialParameters][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const getProfesionales = async () => {
	try {
		const profesionales = await Queries.querySP('[ope].[spProfesionales]', [{ action: 2 }])
		return profesionales.recordset
	} catch (e) {
		log4js.error(`[action: operation metodo: profesionales][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const createOperation = async (data) => {
	try {
		const { recordset } = await Queries.querySP('[ope].[spProfesionales]', [{ action: 1, ...data }])
		return recordset
	} catch (e) {
		log4js.error(`[action: operation metodo: createOperation][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

const updateOperation = async (data) => {
	try {
		const { recordset } = await Queries.querySP('[ope].[spProfesionales]', [{ action: 3, ...data }])
		return recordset
	} catch (e) {
		log4js.error(`[action: operation metodo: createOperation][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
	}
}

module.exports = {
	initialParameters,
	createOperation,
	updateOperation,
	getProfesionales,
}
