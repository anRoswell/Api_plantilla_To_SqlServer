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
        const profesiones = await Queries.querySP('[csc].[spProfesiones]')
        const empresas = await Queries.querySP('[csc].[spEmpresas]')
        const sedes = await Queries.querySP('[csc].[spSedes]')
	    return { profesiones: profesiones.recordsets, empresas: empresas.recordsets, sedes: sedes.recordsets }
    } catch (e) {
        log4js.error(`[action: operation metodo: initialParameters][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
    }	
}

module.exports = {
	initialParameters,
}
